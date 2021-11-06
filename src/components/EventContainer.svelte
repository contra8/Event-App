<script>
    import EventReminder from "./EventReminder.svelte";
    import EventDescription from "./EventDescription.svelte";
</script>

<div class="event-container">
    <div class="event-description-container">
        <EventDescription />
    </div>
    <hr />
    <EventReminder />
</div>

<style>
    hr {
        max-width: 856px;
        width: 100%;
        border: 1px solid #E1E1E1;
        margin-top: 90px;
        margin-bottom: 90px;
    }

    .event-container {
        max-width: 860px;
        display: grid;
    }
</style>