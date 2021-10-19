import React from "react"
import "react-dom"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const FooterWrapper = styled.div`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 0 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  & p {
    text-align: center;
    flex: 0 0 100%;
  }
`

const FooterSocials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const FooterSocialsIcons = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 100%;
  margin-bottom: 2rem;

  & img {
    padding: 0 1rem;
    transition: filter 0.25s ease;
  }

  & img:hover,
  img:focus {
    filter: brightness(50%);
  }
`

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      telegram: file(relativePath: { eq: "telegram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocials>
        <FooterSocialsIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook icon" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter icon" />
          </a>

          <a
            href="https://instagream.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram icon" />
          </a>

          <a
            href="https://telegram.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            <img src={data.telegram.publicURL} alt="telegram icon" />
          </a>
        </FooterSocialsIcons>
        
        <p>&copy; 2021 Company. All right reserved.</p>
      </FooterSocials>
    </FooterWrapper>
  )
}
