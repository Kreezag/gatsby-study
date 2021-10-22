import React from "react"
import "react-dom"
import { Container, Nav, Footer, CoverImage, Content, ContentCard } from '../components';

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
