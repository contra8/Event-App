import { readable } from 'svelte/store';
import dayjs from 'dayjs';

export const eventDate = readable(dayjs('2021-12-17T18:00:00'));