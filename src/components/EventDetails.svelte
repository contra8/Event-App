<script>
    import EventLocation from "./EventLocation.svelte";
    import EventTitle from "./EventTitle.svelte";
    import EventText from "./EventText.svelte";
</script>

<div class="event-details">
    <EventLocation />
    <EventTitle />
    <EventText />
</div>

<style>
    .event-details {
        width: 50%;
    }
</style>