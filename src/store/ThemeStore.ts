import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialValue = browser ? window.localStorage.getItem('theme') ?? 'dark' : 'light';
export const ThemeStore = writable<'light' | 'dark' | string>(initialValue);

ThemeStore.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});
