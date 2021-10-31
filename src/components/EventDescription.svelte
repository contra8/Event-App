<script>
    import EventDetails from "./EventDetails.svelte";
    import EventImage from "./EventImage.svelte";
</script>

<div class="event-description">
    <EventDetails />
    <EventImage />
</div>

<style>
    .event-description {
        display: flex;
        flex-direction: row;
        height: 467px;
    }
</style>