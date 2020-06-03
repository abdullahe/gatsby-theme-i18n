import * as React from "react"
import { Link } from "gatsby"
import { localizedPath } from "../helpers"
import { useLocalization } from "../hooks/use-localization"

export const LocalizedLink = ({ to, ...props }) => {
  const { defaultLang, locale } = useLocalization()

  return <Link {...props} to={localizedPath(defaultLang, locale, to)} />
}
