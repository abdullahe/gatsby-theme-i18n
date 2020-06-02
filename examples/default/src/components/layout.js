import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  MdxLink,
  LocalizedLink,
  useLocale,
  useDefaultLang,
} from "gatsby-theme-i18n"

const components = {
  a: MdxLink,
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <LocalizedLink to="/">Home</LocalizedLink>
      </header>
      <main>
        <p>Current locale: {useLocale()}</p>
        <p>Default language: {useDefaultLang()}</p>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  )
}

export default Layout
