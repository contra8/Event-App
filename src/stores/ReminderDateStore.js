import { writable } from 'svelte/store';
import dayjs from 'dayjs';

const initialReminderPeriod = 5;

export const reminderDate = writable(dayjs().add(initialReminderPeriod, 'day').add(1, 'hour').toDate());