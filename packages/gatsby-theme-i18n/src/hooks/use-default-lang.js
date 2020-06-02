import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useDefaultLang = () => {
  const { themeI18N } = useStaticQuery(graphql`
    {
      themeI18N {
        defaultLang
      }
    }
  `)

  return themeI18N.defaultLang
}

export { useDefaultLang }
