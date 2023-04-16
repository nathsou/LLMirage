<script lang="ts">
    import { store } from "./store";

    let openAIKey = "";
    let darkMode = false;
    let temperature = 0;

    store.subscribe((state) => {
        openAIKey = state.OPENAI_API_KEY;
        darkMode = state.darkMode;
        temperature = state.temperature;
    });

    const updateApiKey = (key: string) => {
        store.update((state) => ({
            ...state,
            OPENAI_API_KEY: key,
        }));
    };

    const toggleDarkMode = () => {
        store.update((state) => ({
            ...state,
            darkMode: !state.darkMode,
        }));
    };

    const updateTemperature = (value: number) => {
        store.update((state) => ({
            ...state,
            temperature: value,
        }));
    };
</script>

<div class="flex flex-col gap-4 basis-96 grow-[0.25]">
    <div class="form-control flex">
        <span class="label-text font-semibold mb-1">OpenAI API Key</span>
        <input
            type="password"
            class="input input-sm input-bordered"
            bind:value={openAIKey}
            on:change={() => updateApiKey(openAIKey)}
            placeholder="Enter key..."
        />
    </div>

    <div class="form-control">
        <span class="label-text font-semibold mb-1">Dark Mode</span>
        <input
            type="checkbox"
            class="toggle toggle-primary"
            checked={darkMode}
            on:change={toggleDarkMode}
        />
    </div>

    <div class="form-control">
        <div class="flex gap-1 items-baseline">
            <span class="label-text font-semibold mb-1">Temperature</span>
            <div class="badge badge-outline badge-sm">
                {temperature.toFixed(2)}
            </div>
        </div>
        <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            bind:value={temperature}
            on:change={() => updateTemperature(temperature)}
            class="range range-primary"
        />
    </div>
</div>
