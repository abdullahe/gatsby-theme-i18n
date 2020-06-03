import * as React from "react"
import { LocaleProvider } from "./context"
import { SEO } from './components/seo'

const wrapPageElement = ({ element, props }) => {
  return (
    <LocaleProvider pageContext={props.pageContext}>
      <SEO location={props.location} />
      {element}
    </LocaleProvider>
  )
}

export { wrapPageElement }
