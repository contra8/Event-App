<script>
    import { reminderDate } from '../stores/ReminderDateStore.js';

    let reminderDate_value;
    reminderDate.subscribe(value => {
        reminderDate_value = value;
    });

</script>

<div class="reminder-element">
    <input value="{reminderDate_value.getHours()}:{reminderDate_value.toString().split(':')[1]}">
</div>

<style>
    input {
        background-color: #F1F2F6;
        font-size: 20px;
    }
</style>