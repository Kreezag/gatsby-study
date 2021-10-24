import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ description, keywords, title, image, author }) => {
  return (
    <StaticQuery
      query={seoQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || ["gatsby blog", "gatsby mdx blog"]

        return (
          <Helmet
            title={title}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                name: "author",
                content: metaAuthor,
              },
              {
                name: "og:title",
                content: metaTitle,
              },
              {
                name: "og:description",
                content: metaDescription,
              },
              {
                name: "og:image",
                content: metaImage,
              },
              {
                name: "og:type",
                content: "website",
              },
            ].concat(
              metaKeywords && metaKeywords.length > 2
                ? {
                    name: "keywords",
                    content: metaKeywords.join(", "),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const seoQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        url
      }
    }
  }
`
