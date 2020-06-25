# TODO

- [ ] Create a recipe to add `gatsby-theme-i18n`
- [ ] Richer theme options
  - includePaths / excludePaths: Array of regex expressions that either include/exclude paths that should get transformed. If none of those two are passed the transformation will apply everywhere
  - prefixDefault: Whether the defaultLang should also be a prefix or not (domain.tld vs. domain.tld/<defaultLang>)
  - locales: If not defined, all languages inside i18n config file will be used. If defined, only this list of locales (+ defaultLang). This should always be shown as a .env file entry so that people can e.g. compile only one language or in CI. Also, this then doesn't trigger the cache invalidation because the config file was changed!
- [ ] Support for client-only pages

# Future improvements

- Improve RSS feed plugin
- Add a benchmark site
- See if `onCreatePage` logic could be generalized for more than MDX input (by user input: Providing a `node` function?). Or if Unified Routes could be used instead (with theme shadowing)
- Language dropdown React component
