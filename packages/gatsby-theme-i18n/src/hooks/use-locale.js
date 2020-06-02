import * as React from "react"
import { LocaleContext } from "../context"

const useLocale = () => {
  return React.useContext(LocaleContext)
}

export { useLocale }
