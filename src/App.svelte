<script lang="ts">
  import { dedent } from "ts-dedent";
  import { v4 as uuidv4 } from "uuid";
  import SettingsPanel from "./lib/SettingsPanel.svelte";
  import { SSE } from "./lib/sse";
  import { store, type Store } from "./lib/store";
  import StarButton from "./lib/StarButton.svelte";
  import Modal from "./lib/Modal.svelte";

  type Target = {
    uuid: string;
    url: string;
    date: string;
    starred: boolean;
  };

  let OPENAI_API_KEY = "";
  let content: HTMLDivElement;
  let isLoading = false;
  let history: Store["history"] = [];
  let cache: Store["cache"] = {};
  let historyIndex = 0;
  let sse: SSE | null = null;
  let canGoBack = false;
  let canGoForward = false;
  let isSettingsModalOpen = false;
  let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let temperature = 0;
  let target: Target = {
    uuid: "",
    url: "",
    date: new Date().toISOString().split("T")[0],
    starred: false,
  };

  $: if (content != null && target.uuid in cache) {
    content.innerHTML = cache[target.uuid].content;
  }

  $: if (
    target.url.startsWith("https://") ||
    target.url.startsWith("http://")
  ) {
    target.url = target.url.replace(/^(https?:\/\/)/, "");
  }

  $: {
    document
      .querySelector("html")!
      .setAttribute("data-theme", darkMode ? "dark" : "light");
  }

  store.subscribe((state) => {
    OPENAI_API_KEY = state.OPENAI_API_KEY;
    history = [...state.history];
    historyIndex = state.historyIndex;
    canGoBack = historyIndex > 0;
    canGoForward = historyIndex < history.length - 1;
    darkMode = state.darkMode;
    temperature = state.temperature;
    isSettingsModalOpen ||= OPENAI_API_KEY.trim().length === 0;

    if (historyIndex < history.length) {
      const uuid = history[historyIndex];
      cache = { ...state.cache };
      const page = state.cache[uuid];

      if (page != null) {
        target = {
          uuid,
          url: page.url,
          date: page.date,
          starred: page.starred,
        };
      }
    }
  });

  const updateTarget = (
    partial: Partial<Omit<Target, "uuid">> = {}
  ): Target => {
    const newTarget: Target = {
      uuid: uuidv4(),
      url: target.url,
      date: target.date,
      starred: target.starred,
      ...partial,
    };

    target = newTarget;

    return newTarget;
  };

  const onPageGenerated = (
    { uuid, url, date }: Target,
    content: string
  ): void => {
    isLoading = false;
    store.update((state) => ({
      version: state.version,
      OPENAI_API_KEY: state.OPENAI_API_KEY,
      cache: {
        ...state.cache,
        [uuid]: {
          uuid,
          date,
          url,
          content,
          timestamp: Date.now(),
          starred: false,
        },
      },
      history: [uuid, ...state.history],
      historyIndex: 0,
      darkMode,
      temperature: state.temperature,
    }));
  };

  const generatePage = async ({ uuid, url, date }: Target): Promise<void> => {
    if (url.trim().length === 0) {
      return;
    }

    content.innerHTML = "";
    let html = "<main>";
    isLoading = true;

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
            content: dedent`
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
        `,
          },
          {
            role: "user",
            content: `url: https://${url}, date: ${date}`,
          },
        ],
      }),
    });

    if (sse) {
      sse.close();
    }

    sse = completion;

    const onMesssage = (e: any) => {
      if (target.uuid !== uuid) {
        completion.removeEventListener("message", onMesssage);
        completion.close();
      } else if (e.data === "[DONE]") {
        onPageGenerated(target, html);
      } else {
        const payload = JSON.parse(e.data);
        const delta = payload.choices[0].delta;

        if ("content" in delta) {
          html += delta.content;
          content.innerHTML = html;
        }
      }
    };

    completion.addEventListener("message", onMesssage);
    completion.stream();
  };

  const onRefresh = () => {
    if (isLoading) {
      isLoading = false;
      sse?.close();
    } else {
      generatePage(updateTarget());
    }
  };

  const updateHistoryIndex = (index: number): void => {
    store.update((state) => ({
      ...state,
      historyIndex: index,
    }));
  };

  const onStar = () => {
    store.update((state) => ({
      ...state,
      cache: {
        ...state.cache,
        [target.uuid]: {
          ...state.cache[target.uuid],
          starred: !target.starred,
        },
      },
    }));
  };
</script>

<section
  id="llmirage-top-bar"
  class="flex justify-center items-center p-2 z-50 bg-white"
>
  <div class="btn-group btn-group-horizontal mr-2">
    <button
      class="btn btn-sm btn-outline border-r-0"
      class:btn-disabled={!canGoBack}
      on:click={() => updateHistoryIndex(historyIndex - 1)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </button>

    <button
      class="btn btn-sm btn-outline"
      class:btn-disabled={!canGoForward}
      on:click={() => updateHistoryIndex(historyIndex + 1)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  </div>

  <button
    class="btn btn-sm btn-outline btn-square mr-2 hidden sm:flex"
    on:click={onRefresh}
    disabled={target.url.length === 0}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      {#if !isLoading}
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      {:else}
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      {/if}
    </svg>
  </button>
  <input
    type="search"
    class="input input-sm input-bordered basis-36 shrink text-ellipsis overflow-hidden whitespace-nowrap grow rounded-r-none border-r-0"
    bind:value={target.url}
    placeholder="Enter a URL..."
  />
  <StarButton
    {onStar}
    className="btn btn-sm btn-square btn-outline border-l-0 rounded-none hidden sm:flex"
    isStarred={target.starred}
  />
  <input
    type="date"
    class="input input-sm input-bordered rounded-none border-l-0 basis-36 shrink-0 hidden sm:block"
    bind:value={target.date}
  />
  <button
    class="btn btn-sm btn-primary rounded-l-none rounded-r-md"
    class:loading={isLoading}
    class:btn-disabled={target.url.length === 0}
    on:click={() => {
      if (OPENAI_API_KEY.length === 0) {
        alert("Please set your OpenAI API key in the settings.");
      } else {
        generatePage(updateTarget());
      }
    }}
  >
    Go
  </button>

  <label for="settings-modal" class="btn btn-sm btn-square btn-outline ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </label>
</section>

<Modal id="settings-modal" isInitiallyOpen={isSettingsModalOpen}>
  <SettingsPanel />
</Modal>

<div bind:this={content} id="content" />

<style scoped>
  #llmirage-top-bar {
    contain: style;
  }

  #llmirage-top-bar input {
    /* focus:border-black focus:outline-0 focus:outline-offset-0 focus:ring-0 */
    border-color: black;
    outline-width: 0px;
    outline-offset: 0px;
    box-shadow: none;
  }
</style>
