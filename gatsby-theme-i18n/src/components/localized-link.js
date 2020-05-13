import React from "react"
import { Link } from "gatsby"
import { useLocale } from "../context"
import { localizedPath } from "../helpers"

export const LocalizedLink = ({ to, ...props }) => {
  const locale = useLocale()

  return <Link {...props} to={localizedPath(locale, to)} />
}
