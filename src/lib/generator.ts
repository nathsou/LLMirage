import dedent from "ts-dedent";
import { SSE } from "./sse";

type Options = {
  OPENAI_API_KEY: string;
  url: string;
  date: string;
  temperature: number;
  specificationMode: boolean;
  onMessage: (html: string) => void;
  onComplete: (html: string) => void;
  onSpecification?: (specification: string) => void;
};

const generatePrompt = (
  specficiationMode: boolean,
  url: string,
  date: string,
  spec: string
) => {
  if (specficiationMode) {
    return dedent`
      You act as an HTML content generator for a website at a given URL and time given its specification.
      The generated page should make sense and be a good representation of the website at the given date in terms of content, style, color palette etc...
      Do not include scripts, images, svgs or lorem ipsums, only the template and inline styles using tailwind css (already imported).
      Images should be replaced with a placeholder rectangle containing the image's alt text.

      URL: https://${url}
      Date: ${date}
      Specification:
      ${spec}
    `;
  } else {
    return dedent`
      You act as an HTML content generator for a website at a given URL and time.
      The generated page should make sense and be a good representation of the website at the given date,
      in terms of content, style, color palette etc...
      Do not include scripts, images, svgs or lorem ipsums, only the template and inline styles using tailwind css (already imported).
      The styles should look beautiful.
      Images should be replaced with a placeholder rectangle containing the image's alt text.
      Do not add any explanations, just generate the HTML content for the website.
      If the date is in the future, imagine what the website will look like.
      If the date is in the past, imagine what the website looked like or would have looked like.
      If some placeholder text is needed, generate real-looking text.

      URL: https://${url}
      Date: ${date}
  `;
  }
};

export const generate = async ({
  OPENAI_API_KEY,
  url,
  date,
  temperature,
  specificationMode,
  onMessage,
  onComplete,
  onSpecification,
}: Options) => {
  const specification = specificationMode
    ? await (
        await fetch("https://api.openai.com/v1/chat/completions", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          method: "POST",
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            temperature,
            stream: false,
            messages: [
              {
                role: "system",
                content: dedent`
              You are a website specification agent, I give you a URL and a date
              and you should provide a detailed technical specification for the desired HTML page
              at the given date,
              if the website does/did not exist, come up with a realistic projection of what if could look like.
              You should structure the specification with these sections:
              
              1. Purpose: Describe a short description of the website and its purpose.
              2. Look and feel: Describe the overall style (sophisticated, fun, quirky...), color palette, etc...
              3. Structure: Define the layout of the page
              4. Content: Write short descriptions for the content of the different sections like the title of articles and what they should contain.
                Make sure that the content is realistic and makes sense for the given date, i.e if the date in in the early 2000s, the layout should reflect that.
          `,
              },
              {
                role: "user",
                content: `url: https://${url}, date: ${date}`,
              },
            ],
          }),
        })
      ).json()
    : null;

  const spec = specification?.choices[0]?.message?.content ?? "";
  if (specificationMode) {
    onSpecification?.(spec);
  }

  const completion = new SSE("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    method: "POST",
    payload: JSON.stringify({
      model: "gpt-3.5-turbo",
      temperature,
      stream: true,
      messages: [
        {
          role: "system",
          content: generatePrompt(specificationMode, url, date, spec),
        },
        {
          role: "user",
          content: `url: https://${url}, date: ${date}`,
        },
      ],
    }),
  });

  let html = "<main>";

  const cancel = (): void => {
    completion.removeEventListener("message", messageHandler);
    completion.close();
  };

  const messageHandler = (e: any): void => {
    if (e.data === "[DONE]") {
      onComplete(html);
    } else {
      const payload = JSON.parse(e.data);
      const delta = payload.choices[0].delta;

      if ("content" in delta) {
        html += delta.content;
        onMessage(html);
      }
    }
  };

  completion.addEventListener("message", messageHandler);
  completion.stream();

  return {
    cancel,
    instance: completion,
  };
};
