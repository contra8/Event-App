<script>
    import { afterUpdate } from 'svelte';
    import dayjs from "dayjs";
    import { Datepicker } from 'svelte-calendar';
    import { eventDate } from '../stores/EventDateStore.js';
    import { reminderDate } from '../stores/ReminderDateStore.js';

    const callForAction = "Enter your email";
    let store;
    let buttonClicked = false;
    let timeOfDayInput;
    let timeOfDayInputHint;
    let emailInput;
    let submitButton;

    let timeOfDayInputIsValid = true;
    let emailInputIsValid = false;
    let inputsAreValid = false;

    // Theme for Datepicker
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
                    highlight: '#FFFFFF'
                },
            },
        }
    }

    let eventDate_value;
    let reminderDate_value;
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
        if (!buttonClicked) {
            let tmpDate = dayjs($store?.selected);
            tmpDate.hour(dayjs(reminderDate_value).hour());
            reminderDate.set(tmpDate);
        }
        else
            buttonClicked = false;
    });

    function onClickDecreaseButton() {
        buttonClicked = true;
        const newDateOfRemindingCandidate = dayjs(reminderDate_value).subtract(1, 'day');
        if (dayjs(newDateOfRemindingCandidate).diff(today, 'day') >= 1) // FUN FACT: Would work even without the ">=1" as 0 or negative numbers equal the Bool false.
            reminderDate.set(dayjs(reminderDate_value).subtract(1, 'day'));
    }

    function onClickIncreaseButton() {
        buttonClicked = true;
        const newDateOfRemindingCandidate = dayjs(reminderDate_value).add(1, 'day');
        if (dayjs(eventDate_value).diff(newDateOfRemindingCandidate, 'day'))
            reminderDate.set(dayjs(reminderDate_value).add(1, 'day'));
    }

    function onTimeOfDayInputChange() {
        validateTimeOfDayInput();
    }

    function validateTimeOfDayInput() {
        timeOfDayInputIsValid = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/.test(timeOfDayInput.value);
        if (timeOfDayInputIsValid) {
            timeOfDayInput.style.backgroundColor = '#F1F2F6';
            timeOfDayInput.style.color = '#000000';
            timeOfDayInputHint.style.display = 'none';
            checkIfInputsAreValid();
        } else {
            timeOfDayInput.style.backgroundColor = '#FF0000';
            timeOfDayInput.style.color = '#FFFFFF';
            timeOfDayInputHint.style.display = 'block';
            checkIfInputsAreValid();
        }
    }

    function validateEmailInput() {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailInputIsValid = regex.test(String(emailInput.value).toLowerCase());

        checkIfInputsAreValid();
    }

    function checkIfInputsAreValid() {
        console.log("checkIfInputsAreValid startet");
        if (timeOfDayInputIsValid && emailInputIsValid) {
            submitButton.disabled = false;
            inputsAreValid = true;
        } else {
            submitButton.disabled = true;
            inputsAreValid = false;
        }
    }

    function onSubmitButtonClick() {
        alert('Submitted');
    }

</script>

<div class="event-reminder">
    <div class="event-reminder-head">
        Set a check back reminder:
    </div>
    <div class="date-reminder-grid-container">
        <div class="date-setters">
            <div class="date-picker-container reminder-element">
                <div class="date-picker-wrapper">
                    <Datepicker
                        format="DD.MM.YYYY"
                        start={tomorrow}
                        end={dayjs(eventDate_value).subtract(1, 'day')}
                        selected={reminderDate_value}
                        bind:store
                        {theme} >
                    </Datepicker>
                    </div>
            </div>
            <div class="reminder-time-switcher reminder-element">
                <div class="input-container">
                    <input bind:this={timeOfDayInput} on:input={onTimeOfDayInputChange} on:change={onTimeOfDayInputChange} value="{dayjs(reminderDate_value).toDate().getHours()}:{reminderDate_value.toString().split(':')[1]}">
                    <span bind:this={timeOfDayInputHint} class="time-of-day-format-hint">Zeitformat: hh:mm,<br />z. B. 14:30</span>
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
            <input bind:this={emailInput} on:keyup={validateEmailInput} class="email-input" type="text" placeholder="{callForAction}" />
            <span class="chars-counter">50</span>
        </div>
        <button bind:this={submitButton} class="submit-button" class:active="{inputsAreValid}" type="button" on:click={onSubmitButtonClick} disabled>
            Submit
        </button>
    </div>
</div>

<style>
    input {
        background-color: #F1F2F6;
        font-size: 20px;
    }

    .event-reminder-head {
        font-size: 25px;
        margin-bottom: 30px;
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

    .date-setters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 80px;
        margin: 0px;
        gap: 20px;
    }

    .date-picker-container {
        height: 80px;
        flex: 1;
    }

    .date-picker-wrapper {
        width: 200px;
        margin: 0 auto;
        margin-top: 20px;
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
        outline: none;
    }

    .chars-counter {
        padding: 30px;
    }

    .day-switcher-button {
        background: #FFFFFF;
        color: #000000;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5em;
        border: none;
    }

    .reminder-day-switcher-elements-container {
        width: 200px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px
    }

    .reminder-day-switcher {
        margin: 0 auto;
        flex: 1;
    }

    .reminder-time-switcher input {
        border: none;
        text-align: center;
        margin-top: 23px;
        width: 100%;
        outline: none;
    }

    .input-container {
        width: 50%;
        margin: 0 auto;
    }

    .time-of-day-format-hint {
        display: none;
        font-size: 14px;
        position: relative;
        top: -80px;
        width: 120px;
        text-align: center;
    }

    .submit-button {
        width: 100%;
        height: 80px;
        color: #888888
    ;
        border-radius: 5px;
        margin-top: -5px;
        background: #F1F2F6;
    }

    .submit-button.active {
        color: #FFFFFF;
        background: #6800ED;
        cursor: pointer;
    }

    @media only screen and (max-width: 740px) {
        .date-setters {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin: 0px;
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
