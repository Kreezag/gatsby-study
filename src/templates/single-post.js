import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "react-dom"
import { Container } from "../components/container"
import { Nav } from "../components/nav"
import { Footer } from "../components/footer"
import { CoverImage } from "../components/coverImage"
import { Post } from "../components/post"
import { H1 } from "../components/typography"


const singlePost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <Container>
      <Nav />
      <CoverImage fixed={featureImage} />
      <Post>
        <H1 textAlign="center" margin="0 0 2rem 0">
          {data.mdx.frontmatter.title}
        </H1>
        <code style={{ whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(data)}
        </code>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
      <Footer />
    </Container>
  )
}

export default singlePost;

export const pageQuery = graphql`
    query SinglePostQuery ($id: String!) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                date
                excerpt
                slug
                title
                featureImage {
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
