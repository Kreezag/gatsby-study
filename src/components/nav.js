import React from "react"
import "react-dom"
import styled from 'styled-components';
import { useStaticQuery, Link, graphql } from 'gatsby';

const NavWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  `)
  
  return(
    <NavWrapper>
      <Link to="/">
        <img src={data.file.publicURL} alt="App Logo" />
      </Link>
    </NavWrapper>
  )
}
