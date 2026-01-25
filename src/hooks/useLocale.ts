import type { Locale, Translations } from '../locale';
import { locales } from '../locale';

const DEFAULT_LOCALE: Locale = 'en';

export const useLocale = () => {
  const t = locales[DEFAULT_LOCALE] as Translations;

  return t;
};
