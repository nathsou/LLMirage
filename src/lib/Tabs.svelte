<script lang="ts">
    export let tabs: { name: string; content: any }[] = [];
    export let activeIndex: number = 0;
</script>

<div class="tabs flex flex-1 flex-col items-center">
    <div>
        {#each tabs as tab, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="tab"
                class:tab-active={index === activeIndex}
                class:font-bold={index === activeIndex}
                on:click={() => {
                    activeIndex = index;
                }}
            >
                {tab.name}
            </div>
        {/each}
    </div>

    <div class="my-4 w-full flex justify-center">
        <svelte:component this={tabs[activeIndex].content} />
    </div>
</div>
