import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sk', 'cs', 'de', 'hr', 'en'],
  defaultLocale: 'sk'
});

export type Locale = (typeof routing.locales)[number];
