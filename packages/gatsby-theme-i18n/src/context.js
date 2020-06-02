import React from "react"
import { defaultLang } from "../utils/default-options"

const LocaleContext = React.createContext(defaultLang)

const Root = ({ children, pageContext: { locale = defaultLang } }) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
)

function useLocale() {
  return React.useContext(LocaleContext)
}

export { LocaleContext, Root, useLocale }
