import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { LocalizedLink, LocalesList } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("home")} />
      <h1>{t("helloWorld")}</h1>
      <p>{t("indexNote")}</p>
      <p>
        <LocalizedLink to="/page-2/">{t("secondPageLink")}</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-3/">{t("thirdPageLink")}</LocalizedLink>
      </p>
      <ul>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <li key={node.frontmatter.slug}>
            <LocalizedLink to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </LocalizedLink>
          </li>
        ))}
      </ul>
      <h2>{t("overviewLang")}</h2>
      <LocalesList />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
