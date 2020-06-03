# General notes

- `onCreatePage` approach > `createPages` approach. However, this could change when we land Unified Routes and one can shadow the template (because currently you can't shadow gatsby-node.js and its page creation)
- Create a recipe adding this theme to a MD/MDX page
- Add a benchmark site
- `onCreatePage` logic could be generalized for more than MDX input (by user input: Providing a `node` function?)
- Support for RSS feed
- Support for client-only pages

# Questions?

- Should I write this theme in TypeScript?
- Format for config file?

# Possible theme options

- defaultLang: The default language that is e.g. used from the i18n source or for the page path creation
- includePaths / excludePaths: Array of regex expressions that either include/exclude paths that should get transformed. If none of those two are passed the transformation will apply everywhere
- prefixDefault: Whether the defaultLang should also be a prefix or not (domain.tld vs. domain.tld/<defaultLang>)
- locales: If not defined, all languages inside i18n config file will be used. If defined, only this list of locales (+ defaultLang). This should always be shown as a .env file entry so that people can e.g. compile only one language or in CI. Also, this then doesn't trigger the cache invalidation because the config file was changed!
- configPath: Path to i18n config file

# i18n config file

- Should also contain the defaultLang

```json5
[
  {
    code: "de", // Required
    name: "German", // Required
    localName: "Deutsch", // Required
    langDir: "ltr", // Required
    dateFormat: "DD.MM.YYYY", // Required
  },
  {
    code: "ar",
    name: "Arabic",
    localName: "...",
    langDir: "rtl",
    dateFormat: "...",
  },
]
```

# Helper components

- [ ] SEO
  - General features
  - JSON-LD schema stuff
- [x] Link Wrapper
- [ ] Language Dropdown (changes route)
- [x] useLocalization hook
    - Current language
    - Default language
    - All languages / config
