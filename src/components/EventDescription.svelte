<script>
    import EventDetails from "./EventDetails.svelte";
    import EventImage from "./EventImage.svelte";
</script>

<div class="event-description">
    <div class="event-details-container">
        <EventDetails />
    </div>
    <div class="event-image-container">
        <EventImage />
    </div>
</div>

<style>
    .event-description {
        display: flex;
        flex-direction: row;
        height: 467px;
    }

    .event-details-container {
        width: 50%;
    }

    .event-image-container {
        width: 50%;
        position: relative;
    }

    @media only screen and (max-width: 768px) {
        .event-details-container {
            width: 100%;
        }
        .event-image-container {
            display: none;
        }
    }

</style>
