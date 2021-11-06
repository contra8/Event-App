<script>
    import {onMount} from "svelte";
    import dayjs from 'dayjs';
    import { Datepicker } from 'svelte-calendar';
    import { reminderDate } from '../stores/ReminderDateStore.js';

    let reminderDate_value;
    //$: startDate = reminderDate_value;
    let startDate;
    const tomorrow = dayjs().add(1, 'day').toDate();

    reminderDate.subscribe(value => {
        reminderDate_value = value;
    });

</script>

<Datepicker format="DD.MM.YYYY" start={tomorrow} selected={reminderDate_value} />