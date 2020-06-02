import * as React from "react"
import { Link } from "gatsby"
import { localizedPath } from "../helpers"
import { useLocale } from "../hooks/useLocale"

export const LocalizedLink = ({ to, ...props }) => {
  const locale = useLocale()

  return <Link {...props} to={localizedPath(locale, to)} />
}
