<script lang="ts">
    import History from "./History.svelte";
    import Settings from "./Settings.svelte";
    import Tabs from "./Tabs.svelte";
</script>

<section class="w-full h-48">
    <Tabs
        tabs={[
            { name: "Settings", content: Settings },
            { name: "History", content: History },
        ]}
    />
</section>
