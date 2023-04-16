<script lang="ts">
    import StarButton from "./StarButton.svelte";
    import { store, type Store } from "./store";

    let history: Store["history"] = [];
    let cache: Store["cache"] = {};
    let historyIndex = 0;

    store.subscribe((state) => {
        history = [...state.history];
        historyIndex = state.historyIndex;
        cache = { ...state.cache };
    });

    const updateHistoryIndex = (index: number): void => {
        store.update((state) => ({
            ...state,
            historyIndex: index,
        }));
    };

    const onStar = (uuid: string) => {
        store.update((state) => ({
            ...state,
            cache: {
                ...state.cache,
                [uuid]: {
                    ...state.cache[uuid],
                    starred: !state.cache[uuid].starred,
                },
            },
        }));
    };

    const removeHistoryItem = (index: number): void => {
        store.update((state) => {
            const history = [...state.history];
            const cache = { ...state.cache };
            const uuid = history[index];

            delete cache[uuid];
            history.splice(index, 1);

            return {
                ...state,
                history,
                cache,
                historyIndex: Math.max(
                    index === historyIndex ? index - 1 : historyIndex,
                    0
                ),
            };
        });
    };
</script>

<div class="overflow-y-auto w-full h-full">
    <table class="table w-full overflow-y-auto">
        <thead>
            <tr>
                <th />
                <th>URL</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#each history as uuid, index}
                <tr
                    class="hover border-primary"
                    class:border-2={index === historyIndex}
                >
                    <td>
                        <StarButton
                            onStar={() => onStar(uuid)}
                            isStarred={cache[uuid].starred}
                            className="btn btn-sm btn-square btn-ghost rounded-none"
                        />
                    </td>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <td
                        class="cursor-pointer max-w-md text-ellipsis overflow-hidden whitespace-nowrap"
                        on:click={() => updateHistoryIndex(index)}
                    >
                        {cache[uuid].url}
                    </td>
                    <td>{cache[uuid].date}</td>
                    <td>
                        <button
                            class="btn btn-sm btn-primary"
                            on:click={() => removeHistoryItem(index)}
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
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
