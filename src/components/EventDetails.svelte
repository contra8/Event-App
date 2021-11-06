<script>
    import EventLocation from "./EventLocation.svelte";
    import EventTitle from "./EventTitle.svelte";
    import EventText from "./EventText.svelte";
    import EventDate from "./EventDate.svelte";
</script>

<div class="event-details">
    <EventLocation />
    <EventTitle />
    <EventText />
    <EventDate />
</div>

<style>
    .event-details {
        /*width: 50%;*/
        height: 100%;
        line-height: 26px;
        position: relative;
    }
</style>