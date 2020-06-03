import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocalization } from '../hooks/use-localization'

// TODO:
// - <link rel="alternate"> with all languages
// - JSON-LD schema.org
// -

const SEO = ({ location }) => {
  const { locale } = useLocalization()

  return (
    <Helmet>
      <html lang={locale} />
    </Helmet>
  )
}

export { SEO }