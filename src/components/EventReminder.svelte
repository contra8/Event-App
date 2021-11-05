<script>
    import { onMount } from 'svelte';

    import ReminderDatePicker from "./ReminderDatePicker.svelte";
    import ReminderTimeSetter from "./ReminderTimeSetter.svelte";
    import { eventDate } from '../stores/EventDateStore.js';
    import { reminderDate } from '../stores/ReminderDateStore.js';
    import ReminderDaySwitcher from "./ReminderDaySwitcher.svelte";
    import dayjs from "dayjs";

    let eventDate_value;
    let reminderDate_value;
    let eventDateString;

    eventDate.subscribe(value => {
        eventDate_value = value;
    });

    reminderDate.subscribe(value => {
        reminderDate_value = value;
    });

    onMount(async () => {
        const inFiveDays = dayjs().add(5, 'day').toDate();
        //reminderDate.set(inFiveDays);
    });

</script>

<div class="event-reminder">
    <div class="event-reminder-head">
        Set a check back reminder:
        <!--br />
        Event Date.getDate(): {eventDate_value.getDate()}<br />
        Event Date: {eventDate_value}<br />-->
        <!--br />
        Reminder Date: {reminderDate_value}-->
    </div>
    <div class="date-setters">
        <ReminderDatePicker id="reminder-date-picker" />
        <ReminderTimeSetter id="reminder-time-setter" />
        <ReminderDaySwitcher id="reminder-day-switcher" />
    </div>
    <div class="e-mail-input">
        Enter your email
    </div>
    <button>
        Submit
    </button>
</div>

<style>

    #reminder-date-picker {
        color: red;
    }

    button {
        width: 100%;
        height: 80px;
        color: white;
        background: #6800ED;
        border-radius: 5px;
    }

    .event-reminder-head {
        font-size: 25px;
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
    }

    .event-reminder {
        width: 100%;
    }

    .date-setters {
        display: flex;
        flex-direction: row;
    }
</style>
