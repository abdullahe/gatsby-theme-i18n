import * as React from "react"
import { LocaleProvider } from "./context"

const wrapPageElement = ({ element, props }) => (
  <LocaleProvider {...props}>{element}</LocaleProvider>
)

export { wrapPageElement }
