import React from "react"
import "react-dom"
import { Container } from "../components/container"
import { Nav } from "../components/nav"
import { Footer } from "../components/footer"
import { CoverImage } from "../components/coverImage"
import { Content } from "../components/content"
import { ContentCard } from "../components/contentCard"

const IndexPage = () => {
  return (
    <Container>
      <Nav />
      <CoverImage />
      <Content>
        <ContentCard
          date="2021.10.12"
          title="lorem ipsim bla-bla-bla"
          slug="/test"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at aut consequatur dignissimos dolore, eius illo impedit laborum maxime, minus optio perferendis quis sequi sint sunt, tempore tenetur veniam."
        />
      </Content>
      
      <Footer />
    </Container>
  )
}

export default IndexPage
