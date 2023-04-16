<script lang="ts">
    export let id: string;
    export let isInitiallyOpen: boolean;
</script>

<div class="llmirage-modal">
    <input
        type="checkbox"
        {id}
        class="modal-toggle btn btn-sm btn-outline btn-square ml-2"
        checked={isInitiallyOpen}
    />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <label for={id} class="modal cursor-pointer">
        <label for="" class="modal-box relative w-11/12 max-w-3xl h-1/2">
            <slot />
        </label>
    </label>
</div>

<style>
    .llmirage-modal {
        contain: style;
    }
</style>
