import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import { useLocalization } from "../hooks/use-localization"

// TODO:
// - <link rel="alternate"> with all languages
// - JSON-LD schema.org
// -

const SEO = ({ location, pageContext }) => {
  const { locale, config, defaultLang } = useLocalization()
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const defaultSiteUrl = data.site.siteMetadata.siteUrl
  const { pathname } = location
  console.log({ pathname })
  const [, base, slug] = pathname.split(`/`)
  console.log({ base, slug })

  return (
    <Helmet>
      <html lang={locale} />
      <link rel="alternate" hrefLang="x-default" href={defaultSiteUrl} />
      <link rel="alternate" hrefLang={pageContext.hrefLang} href={`${defaultSiteUrl}${pathname === withPrefix(`/`) ? `` : pathname}`} />
      <meta property="og:locale" content={pageContext.hrefLang.replace("-","_")} />
      {config.map(l => {
        if (l.code === defaultLang) return null
        return (
          <meta key={l.code} property="og:locale:alternate" content={l.hrefLang.replace("-","_")} />
        )
      })}
    </Helmet>
  )
}

export { SEO }
