<script>
    import EventReminder from "./EventReminder.svelte";
    import EventDescription from "./EventDescription.svelte";
    import EventContainer from "./EventContainer.svelte";
</script>

<div class="content">
    <EventContainer />
</div>

<style>
    hr {
        width: 856px;
        border: 1px solid #E1E1E1;
    }

    .content {
        max-width: 860px;
        display: grid;
    }
</style>