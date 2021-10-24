import React from "react"
import "react-dom"
import { graphql } from "gatsby"
import { Container } from "../components/container"
import { Nav } from "../components/nav"
import { Footer } from "../components/footer"
import { CoverImage } from "../components/coverImage"
import { H1, P } from "../components/typography"
import { Content } from "../components/content"
import { ContentCard } from "../components/contentCard"
import { Pagination } from "../components/pagination"

const allPosts = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <Nav />
      <CoverImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          All posts
        </H1>
        <P color="dark2" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          dignissimos dolor doloribus eos esse est illo molestiae nam, neque
          officiis, provident quaerat recusandae sapiente sed sequi tenetur ut,
          velit vero!
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <Footer />
    </Container>
  )
}

export default allPosts

export const allPostsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date
            excerpt
            slug
            title
          }
        }
      }
    }
  }
`
