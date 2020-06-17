const withDefaults = require(`./utils/default-options`).withDefaults

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  return {
    plugins: [`gatsby-plugin-react-helmet`],
  }
}
