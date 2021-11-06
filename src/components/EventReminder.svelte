<script>
    import { afterUpdate } from 'svelte';
    import dayjs from "dayjs";
    import { Datepicker } from 'svelte-calendar';
    import { InlineCalendar } from 'svelte-calendar';
    import { eventDate } from '../stores/EventDateStore.js';
    import { reminderDate } from '../stores/ReminderDateStore.js';

    let store;

    const theme = {
        calendar: {
            shadow: '0px 0px 0px 0px rgba(1, 1, 1, 1)',
            colors: {
                background: {
                    primary: '#F1F2F6',
                    highlight: '#6800ED'
                },
                text: {
                    primary: '#000000',
                    highlight: '#FFFFF'
                },
            },
        }
    }

    let eventDate_value;
    let reminderDate_value;
    // $: reminderDate_value = store;
    let eventDateString;

    const tomorrow = dayjs().add(1, 'day').toDate();

    const today = dayjs().toDate();
    $: remainingDays = dayjs(reminderDate_value).diff(today, 'day');

    eventDate.subscribe(value => {
        eventDate_value = value;
    });

    reminderDate.subscribe(value => {
        reminderDate_value = value;
    });

    afterUpdate(() => {
        console.log("------------");
        console.log("afterUpdate 1: reminderDate_value = " + reminderDate_value);
        console.log("afterUpdate 2: $store?.selected = " + $store?.selected);
        //reminderDate.set(dayjs($store?.selected));
        //reminderDate.set(dayjs(reminderDate_value).add(1, 'day'));
        console.log("afterUpdate 3: reminderDate_value = " + reminderDate_value);
    });

    function onClickDecreaseButton() {
        const newDateOfRemindingCandidate = dayjs(reminderDate_value).subtract(1, 'day');
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
        Set a check back reminder:<br />
        Store date: {$store?.selected}
        <!--br />
        Event Date.getDate(): {eventDate_value.getDate()}<br />
        Event Date: {eventDate_value}<br />-->
        <br />
        Reminder Date: {reminderDate_value}
    </div>
    <div class="date-reminder-grid-container">
        <div class="date-setters">
            <div class="date-picker-container reminder-element">
                <!--InlineCalendar bind:store /-->
                <Datepicker
                    format="DD.MM.YYYY"
                    start={tomorrow}
                    end={dayjs(eventDate_value).subtract(1, 'day')}
                    selected={reminderDate_value}
                    bind:store
                    {theme} />
            </div>
            <div class="reminder-time-switcher reminder-element">
                <div class="input-container">
                    <input value="{dayjs(reminderDate_value).toDate().getHours()}:{reminderDate_value.toString().split(':')[1]}">
                </div>
            </div>
            <div class="reminder-day-switcher reminder-element">
                <div class="reminder-day-switcher-elements-container">
                    <button class="day-switcher-button" on:click={onClickDecreaseButton}>-</button>
                    in {remainingDays} Days
                    <button class="day-switcher-button" on:click={onClickIncreaseButton}>+</button>
                </div>
            </div>
        </div>
        <div class="email-input-container">
            <input class="email-input" type="text" value="Enter your email" />
            <span class="chars-counter">50</span>
        </div>
        <button class="submit-button">
            Submit
        </button>
    </div>
</div>

<style>
    button {
        cursor: pointer;
    }

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
        margin-top: -5px;
    }

    .event-reminder {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .date-reminder-grid-container {
        width: 100%;
        display: grid;
        grid-template-rows: auto;
        row-gap: 20px;
    }

    .event-reminder-head {
        font-size: 25px;
    }

    .date-setters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 80px;
        margin: 0px;
        gap: 10px;
    }

    .date-picker-container {
        height: 80px;
    }

    .reminder-element {
        /*
        flex: 1;
        margin-left: 0px;

         */
    }

    .email-input-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 80px;
        color: #888888;
        background: #F1F2F6;
    }

    .email-input {
        font-weight: 300;
        width: 100%;
        height: 80px;
        color: #888888;
        background: #F1F2F6;
        border: none;
        font-size: 18px;
        padding-left: 30px;
        margin-bottom: 0px;
    }

    .chars-counter {
        padding: 30px;
    }

    .day-switcher-button {
        background: #FFFFFF;
        color: #000000;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        font-size: 1.5em;
        border: none;
        margin: 0px;
    }

    .reminder-day-switcher-elements-container {
        min-width: 150px;
        margin-left: auto;
        margin-right: auto;    }

    .reminder-day-switcher {
        margin: 0 auto;
    }

    .reminder-time-switcher {
        flex: 1;
    }

    .reminder-time-switcher input {
        border: none;
        text-align: center;
        /*padding-top: 30px;*/
        margin-top: 23px;
    }

    .input-container {
        width: 50%;
        margin: 0 auto;
    }

    @media only screen and (max-width: 700px) {
        .date-setters {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin: 0px;
            color: green;
            gap: 20px;
        }

        .date-picker-container {
            width: 100%;
            margin: 0px;
            height: 80px;
        }

        .reminder-time-switcher {
            width: 100%;
            margin: 0px;
            flex: unset;
            height: 80px;
        }

        .reminder-day-switcher {
            width: 100%;
            margin: 0px;
            height: 80px;
            padding: 0px;
        }
    }
</style>
