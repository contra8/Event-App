<script>
    import { onMount } from 'svelte';

    import ReminderDatePicker from "./ReminderDatePicker.svelte";
    import ReminderTimeSetter from "./ReminderTimeSetter.svelte";
    import { eventDate } from '../stores/EventDateStore.js';
    import { reminderDate } from '../stores/ReminderDateStore.js';
    import ReminderDateSwitcher from "./ReminderDateSwitcher.svelte";

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
        let initialReminderDate = eventDate_value;
        initialReminderDate.setDate(initialReminderDate.getDate() - 5);
        reminderDate.set(initialReminderDate);
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
        <ReminderDatePicker />
        <ReminderTimeSetter />
        <ReminderDateSwitcher />
    </div>
</div>

<style>
    .event-reminder-head {
        font-size: 25px;
    }

    .event-reminder {
        width: 100%;
    }

    .date-setters {
        display: flex;
        flex-direction: row;
    }
</style>
