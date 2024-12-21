import { createEvent, createStore } from "effector";

type ThemeType = 'dark' | 'light'

export const changeTheme = createEvent('effect')

export const $theme = createStore<ThemeType>('dark')
    .on(changeTheme , (value) => value === 'dark' ? 'light' : 'dark')