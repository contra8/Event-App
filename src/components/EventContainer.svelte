<script>
    import EventReminder from "./EventReminder.svelte";
    import EventDescription from "./EventDescription.svelte";
</script>

<div class="event-container">
    <EventDescription />
    <hr />
    <EventReminder />
</div>

<style>
    hr {
        width: 856px;
        border: 1px solid #E1E1E1;
    }

    .event-container {
        max-width: 860px;
        display: grid;
    }
</style>