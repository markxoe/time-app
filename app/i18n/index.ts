import { getLocale } from "../connection/ipc";
import locales from "./locales";

export interface OneLang {
  close: string;
  "Toggle dark mode, right click sets mode to system": string;
}

const defaultLocale = "en";
let locale = getLocale();

export const getLang = (): OneLang =>
  Object.keys(locales).includes(locale)
    ? locales[locale]
    : locales[defaultLocale];

/**
 * How to add a language: Add language file to the locales folder. Export the data in the locales/index.ts file
 * Add Moment.js Language support in moment-langs.ts
 */
