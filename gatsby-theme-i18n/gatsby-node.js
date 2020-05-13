const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const withDefaults = require(`./utils/default-options`).withDefaults
const { localizedPath } = require(`./src/helpers`)

function writeFile(filePath, data, reporter) {
  // Check if config file already exists
  if (!fs.existsSync(filePath)) {
    // Create the necessary folders for the default config file
    mkdirp(path.dirname(filePath), err => {
      if (err) {
        reporter.panicOnBuild(
          `[gatsby-theme-i18n]: Failing to create the directory for the default config file\n\n${err}`
        )
        return
      }

      // Create the default config file
      fs.writeFile(filePath, data, err => {
        if (err) {
          reporter.panicOnBuild(
            `[gatsby-theme-i18n]: Failing to create a default config file\n\n${err}`
          )
          return
        }

        reporter.info(
          `[gatsby-theme-i18n]: Created a default config file at ${filePath}`
        )
      })
    })
  }
}

exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const defaultContent = [
    {
      code: "en",
      name: "English",
      localName: "English",
      langDir: "ltr",
      dateFormat: "MM/DD/YYYY",
    },
  ]
  const data = JSON.stringify(defaultContent)

  const { program } = store.getState()
  const defaultConfigPath = path.join(program.directory, `src/i18n/config.json`)

  if (themeOptions.configPath) {
    if (!fs.existsSync(themeOptions.configPath)) {
      reporter.panicOnBuild(
        `[gatsby-theme-i18n]: Couldn't find the file at ${themeOptions.configPath}`
      )
    }
    reporter.info(
      `[gatsby-theme-i18n]: Config file found at ${themeOptions.configPath}`
    )
  } else {
    writeFile(defaultConfigPath, data, reporter)
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type ThemeI18n implements Node {
      defaultLang: String
    }
  `)
}

exports.sourceNodes = (
  { actions, createContentDigest, createNodeId },
  themeOptions
) => {
  const { createNode } = actions

  const options = withDefaults(themeOptions)
  const locales = require(options.configPath)

  const configNode = {
    ...options,
    locales,
  }

  createNode({
    ...configNode,
    id: createNodeId(`gatsby-theme-i18n-config`),
    parent: null,
    children: [],
    internal: {
      type: `ThemeI18n`,
      contentDigest: createContentDigest(configNode),
      content: JSON.stringify(configNode),
      description: `Options for gatsby-theme-i18n`,
    },
  })
}

exports.onCreateNode = ({ node, actions }, themeOptions) => {
  const { createNodeField } = actions

  const { defaultLang } = withDefaults(themeOptions)

  if (node.internal.type === `Mdx`) {
    const name = path.basename(node.fileAbsolutePath, `.mdx`)

    const isDefault = name === `index`

    const lang = isDefault ? defaultLang : name.split(`.`)[1]

    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
}

exports.onCreatePage = ({ page, actions }, themeOptions) => {
  const { createPage, deletePage } = actions
  const { configPath } = withDefaults(themeOptions)

  deletePage(page)

  const locales = require(configPath)

  locales.forEach(locale => {
    return createPage({
      ...page,
      path: localizedPath(locale.code, page.path),
      context: {
        ...page.context,
        locale: locale.code,
        dateFormat: locale.dateFormat,
      },
    })
  })
}