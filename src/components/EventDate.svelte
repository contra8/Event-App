<script>
    import { onMount } from 'svelte';
    import { eventDate } from '../stores/EventDateStore.js';

    let eventDate_value;
    let eventDateString;

    eventDate.subscribe(value => {
        eventDate_value = value;
    });

    onMount(async () => {
        eventDateString = eventDate_value.toString().split(' ')[0]
            + " "
            + eventDate_value.getDate()
            + ". "
            + eventDate_value.toLocaleString('default', { month: 'short' })
            + " | "
            + eventDate_value.getHours()
            + ":"
            + eventDate_value.toString().split(":")[1]
            + " "
            + eventDate_value.toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(" ")[1];
    });

</script>

<div class="event-date">
    <div class="text-container">
        <div class="event-date-header">
            EVENT DATE
        </div>
        <div class="date">
            {eventDateString}
        </div>
    </div>
</div>

<style>
    .event-date {
        background-color: #000000;
        color: #FFFFFF;
        width: 100%;
        height: 129px;
        border-radius: 5px;
        padding-bottom: 0px;
        position: absolute;
        bottom: 0;
    }

    .event-date-header:before {
        /* content: url("img/clock.png"); */
        background-image: url('../images/clock-icon.png');
        background-size: 25px 25px;
        display: inline-block;
        width: 50px;
        height: 10px;
        content:"";
        position: relative;
        top: 0px;
        left: 0px;
        background-repeat: no-repeat;
    }

    .text-container {
        padding-top: 30px;
        padding-left: 36px;
    }

    .date {
        font-weight: 700;
        font-size: 25px;
    }

</style>
