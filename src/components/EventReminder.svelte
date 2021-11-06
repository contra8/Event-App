<script>
    import { onMount } from 'svelte';
    import dayjs from "dayjs";
    import { Datepicker } from 'svelte-calendar';
    import { eventDate } from '../stores/EventDateStore.js';
    import { reminderDate } from '../stores/ReminderDateStore.js';

    let eventDate_value;
    let reminderDate_value;
    let eventDateString;
    //let remainingDays;

    const tomorrow = dayjs().add(1, 'day').toDate();

    const today = dayjs().toDate();
    $: remainingDays = dayjs(reminderDate_value).diff(today, 'day');

    eventDate.subscribe(value => {
        eventDate_value = value;
    });

    reminderDate.subscribe(value => {
        reminderDate_value = value;
    });

    function onClickDecreaseButton() {
        const newDateOfRemindingCandidate = dayjs(reminderDate_value).subtract(1, 'day');
        console.log(dayjs(newDateOfRemindingCandidate).diff(today, 'day'));
        if (dayjs(newDateOfRemindingCandidate).diff(today, 'day') >= 1) // FUN FACT: Would work even without the ">=1" as 0 or negative numbers equal the Bool false.
            reminderDate.set(dayjs(reminderDate_value).subtract(1, 'day'));
    }

    function onClickIncreaseButton() {
        const newDateOfRemindingCandidate = dayjs(reminderDate_value).add(1, 'day');
        if (dayjs(eventDate_value).diff(newDateOfRemindingCandidate, 'day'))
            reminderDate.set(dayjs(reminderDate_value).add(1, 'day'));
    }
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
        <div class="date-picker-container reminder-element">
            <Datepicker format="DD.MM.YYYY" start={tomorrow} selected={reminderDate_value} />
        </div>
        <div class="reminder-time-switcher reminder-element">
            <input value="{dayjs(reminderDate_value).toDate().getHours()}:{reminderDate_value.toString().split(':')[1]}">
        </div>
        <div class="reminder-day-switcher reminder-element">
            <button class="day-switcher-button" on:click={onClickDecreaseButton}>-</button>
            in {remainingDays} Days
            <button class="day-switcher-button" on:click={onClickIncreaseButton}>+</button>
        </div>
    </div>
    <div class="e-mail-input">
        Enter your email
    </div>
    <button class="submit-button">
        Submit
    </button>
</div>

<style>

    input {
        background-color: #F1F2F6;
        font-size: 20px;
    }

    .submit-button {
        width: 100%;
        height: 80px;
        color: white;
        background: #6800ED;
        border-radius: 5px;
    }

    .event-reminder {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .event-reminder-head {
        font-size: 25px;
    }

    .date-setters {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
        width: 100%;
    }

    .date-picker-container {
        align-items: center;
    }

    .reminder-element {
        flex: 1;
    }
</style>
