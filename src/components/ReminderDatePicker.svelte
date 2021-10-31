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

    onMount(async () => {
        //console.log(reminderDate_value);
        /*
        startDate = reminderDate_value;
        console.log("startDate = " + startDate);
        startDate = new Date('December 17, 1995 03:24:00');
        console.log("startDate = " + startDate);

         */
        //startDate = reminderDate_value; //new Date('December 17, 1995 03:24:00');
    });

</script>

<Datepicker format="DD.MM.YYYY" start={tomorrow} selected={reminderDate_value} />