<script>
    import { onMount } from 'svelte';
    import dayjs from 'dayjs';

    import { eventDate } from '../stores/EventDateStore.js';
    import { reminderDate } from '../stores/ReminderDateStore.js';

    let eventDate_value;
    let reminderDate_value;
    let eventDateString;

    eventDate.subscribe(value => {
        eventDate_value = value;
    });

    reminderDate.subscribe(value => {
        reminderDate_value = value;
    });

    //$: remainingDays = eventDate_value.getDate() - reminderDate_value.getDate();
    let remainingDays;

    onMount(async () => {
        const today = dayjs().toDate();
        remainingDays = dayjs(reminderDate_value).diff(today, 'day');
    });

</script>

<div class="reminder-day-switcher reminder-element">
    <!--{today}<br />
    {reminderDate_value}<br /-->
    - in {remainingDays} Days +
</div>