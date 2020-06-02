const defaultLang = `en`

function withDefaults(themeOptions) {
  return {
    ...themeOptions,
    configPath: themeOptions.configPath,
    defaultLang: themeOptions.defaultLang || defaultLang,
  }
}

module.exports = {
  defaultLang,
  withDefaults,
}
