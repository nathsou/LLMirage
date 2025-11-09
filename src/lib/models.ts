export type OpenAIModel = {
  id: string;
  object: string;
  created: number;
  owned_by: string;
};

export type ModelsResponse = {
  object: string;
  data: OpenAIModel[];
};

// Known pricing for models (input price per 1M tokens in USD)
// Based on OpenAI pricing as of 2024
const MODEL_PRICING: Record<string, number> = {
  'gpt-4': 30.0,
  'gpt-4-32k': 60.0,
  'gpt-4-turbo-preview': 10.0,
  'gpt-4-1106-preview': 10.0,
  'gpt-4-0125-preview': 10.0,
  'gpt-3.5-turbo': 0.5,
  'gpt-3.5-turbo-16k': 3.0,
  'gpt-3.5-turbo-1106': 1.0,
  'gpt-3.5-turbo-0125': 0.5,
};

export const fetchAvailableModels = async (apiKey: string): Promise<OpenAIModel[]> => {
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch models:', response.statusText);
      return [];
    }

    const data: ModelsResponse = await response.json();
    
    // Filter for GPT models only (chat completion models)
    return data.data
      .filter(model => model.id.startsWith('gpt-'))
      .sort((a, b) => a.id.localeCompare(b.id));
  } catch (error) {
    console.error('Error fetching models:', error);
    return [];
  }
};

export const getCheapestModel = (models: OpenAIModel[]): string => {
  if (models.length === 0) {
    return 'gpt-3.5-turbo';
  }

  // Find the cheapest model based on known pricing
  let cheapestModel = models[0].id;
  let cheapestPrice = MODEL_PRICING[cheapestModel] ?? Infinity;

  for (const model of models) {
    const price = MODEL_PRICING[model.id];
    if (price !== undefined && price < cheapestPrice) {
      cheapestPrice = price;
      cheapestModel = model.id;
    }
  }

  // If no pricing info available, default to gpt-3.5-turbo variants
  if (cheapestPrice === Infinity) {
    const gpt35Model = models.find(m => m.id.includes('gpt-3.5-turbo'));
    if (gpt35Model) {
      return gpt35Model.id;
    }
  }

  return cheapestModel;
};
