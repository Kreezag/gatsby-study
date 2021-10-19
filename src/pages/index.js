import React from "react"
import "react-dom"
import { Container, Nav, Footer, CoverImage, Content } from '../components';

const IndexPage = () => {
  return (
    <Container>
      <Nav />
      <CoverImage />
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae delectus eius facere ipsam necessitatibus odio quisquam quod ratione? Corporis dolorum exercitationem facilis inventore ipsum iure laboriosam mollitia quam?
      </Content>
      
      <Footer />
    </Container>
  )
}

export default IndexPage
