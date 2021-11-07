<script>
    import { onMount } from 'svelte';
    import dayjs from "dayjs";
    import { eventDate } from '../stores/EventDateStore.js';

    let eventDate_value;
    let eventDateString;

    eventDate.subscribe(value => {
        eventDate_value = value;
    });

    onMount(async () => {
        let eventDate = dayjs(eventDate_value).toDate(); // convert dayjs date to JS Date Object
        eventDateString = eventDate.toString().split(' ')[0]
            + " "
            + eventDate.getDate()
            + ". "
            + eventDate.toLocaleString('default', { month: 'short' })
            + " | "
            + eventDate.getHours()
            + ":"
            + eventDate.toString().split(":")[1]
            + " "
            + eventDate.toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(" ")[1];
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

    @media only screen and (max-width: 420px) {
        .event-date {
            position: static;
        }
    }

    .event-date-header {
        margin-bottom: 10px;
    }

    .event-date-header:before {
        background-image: url('../images/clock-icon.png');
        background-size: 25px 25px;
        display: inline-block;
        width: 35px;
        height: 25px;
        content: "";
        position: relative;
        top: 5px;
        left: 0px;
        background-repeat: no-repeat;
    }

    .text-container {
        padding-top: 25px;
        padding-left: 36px;
    }

    .date {
        font-weight: 700;
        font-size: 25px;
    }

</style>
