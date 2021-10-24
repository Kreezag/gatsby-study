import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "react-dom"
import { Container } from "../components/container"
import { CoverImage } from "../components/coverImage"
import { Post } from "../components/post"
import { H1 } from "../components/typography"
import { Seo } from "../components/seo"


const SinglePost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
        image={data.mdx.frontmatter.featureImage.publicURL}
      />
      <CoverImage fixed={featureImage} />
      <Post>
        <H1 textAlign="center" margin="0 0 2rem 0">
          {data.mdx.frontmatter.title}
        </H1>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </Post>
    </Container>
  )
}

export default SinglePost;

export const postQuery = graphql`
    query SinglePostQuery ($id: String!) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                date
                excerpt
                slug
                title
                featureImage {
                    publicURL
                    childImageSharp {
                        fixed {
                            base64
                            tracedSVG
                            aspectRatio
                            srcWebp
                            srcSetWebp
                            originalName
                        }
                    }
                }
            }
        }
    }
`
