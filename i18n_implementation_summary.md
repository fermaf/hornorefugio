# Internationalization Implementation Summary

## Overview
We have successfully implemented internationalization (i18n) for the Refugio El Galpón website, supporting Spanish (ES) and English (EN). The system defaults to the user's browser language but allows manual switching via a new Language Selector in the header.

## Key Components

### 1. Configuration (`src/i18n/config.ts`)
- **Library:** `react-i18next` with `i18next`.
- **Detection:** `i18next-browser-languagedetector` (detects from localStorage, cookie, navigator).
- **Fallback:** English (`en`).
- **Resources:** Loaded from `src/i18n/locales/es.json` and `src/i18n/locales/en.json`.

### 2. Translation Files
- **Spanish (`es.json`):** Complete translations for all pages and components.
- **English (`en.json`):** Complete translations for all pages and components.
- **Structure:** Nested JSON objects by component/page (e.g., `home`, `about`, `contact`, `header`, `footer`).

### 3. Language Selector (`components/LanguageSelector.tsx`)
- **Functionality:** Allows users to toggle between 'ES' and 'EN'.
- **Visuals:** Highlights the active language.
- **Placement:** Integrated into `Header.tsx` (Desktop and Mobile views).

### 4. Component Updates
- **Header:** Navigation links and brand name are now dynamic.
- **Footer:** Contact info, tagline, and copyright are dynamic.
- **BitcoinBanner:** Discount text is dynamic and uses rich text interpolation (`Trans` component).
- **SEO:** Meta titles and descriptions are dynamic. Default values are provided via i18n.
- **Common Spaces:** Data in `constants.tsx` now uses translation keys.

### 5. Page Updates
All pages have been updated to use the `useTranslation` hook and `Trans` component where necessary:
- `HomePage.tsx`
- `AboutPage.tsx`
- `AccommodationPage.tsx`
- `ArtPage.tsx`
- `VolunteerPage.tsx`
- `ContactPage.tsx`

## How to Add New Translations
1.  **Add Key:** Add the new key-value pair to both `src/i18n/locales/es.json` and `src/i18n/locales/en.json`.
2.  **Use Hook:** In your component:
    ```typescript
    import { useTranslation } from 'react-i18next';
    // ...
    const { t } = useTranslation();
    // ...
    <p>{t('section.key')}</p>
    ```
3.  **Rich Text:** For text with HTML tags (like bolding), use the `Trans` component:
    ```typescript
    import { Trans } from 'react-i18next';
    // ...
    <Trans i18nKey="section.key" components={{ 1: <strong></strong> }} />
    ```
    (Ensure the JSON string has placeholders like `<1>text</1>`).

## Next Steps
- **Review:** Manually review the English translations for tone and accuracy.
- **Testing:** Test the language switching on a live deployment to ensure persistence works as expected.
