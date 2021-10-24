import React from "react"
import { graphql } from "gatsby"
import { Container } from "../components/container"
import { Content } from "../components/content"
import { H1 } from "../components/typography"
import { CoverImage } from "../components/coverImage"

const NotFoundPage = ({ data }) => {
  const coverImageSharp = data.imageSharp.fixed
  return (
    <Container>
      <CoverImage fixed={coverImageSharp}/>
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Oops... something wend wrong.
          Page is not found!
        </H1>
      </Content>
    </Container>
  )
}

export default NotFoundPage

export const notFoundQuery = graphql`
  query NotFoundQuery {
      imageSharp(fixed: { originalName: { eq: "notFound.jpg" } }) {
          fixed {
              ...GatsbyImageSharpFixed
          }
      }
  }
  
`
