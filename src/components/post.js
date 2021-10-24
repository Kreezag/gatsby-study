import React from "react"
import "react-dom"
import styled from 'styled-components';

const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background: ${(props) => props.theme.colors.light};
  padding-top: ${(props) => props.theme.spacings.large};
  padding-bottom: ${(props) => props.theme.spacings.large};
  padding-left: ${(props) => props.theme.spacings.xLarge};
  padding-right: ${(props) => props.theme.spacings.xLarge};
  box-shadow: ${(props) => props.theme.shadows.default};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding-top: ${(props) => props.theme.spacings.medium};
    padding-bottom: ${(props) => props.theme.spacings.medium};
    padding-left: ${(props) => props.theme.spacings.large};
    padding-right: ${(props) => props.theme.spacings.large};
  }
  
  h1,h2,h3,h4,h5,h6 {
    color: ${(props) => props.theme.colors.dark1};
  }

  h1:not(:first-child),h2,h3,h4,h5,h6 {
    margin-top: 2rem;
  }
  
  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }
  
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  ul,
  ol {
    color: ${(props) => props.theme.colors.dark1};
    margin: 1rem 0 1rem 2rem;
  }
  
  li {
    margin: 0.25rem 0;
  }
  
  img {
    max-width: 33.33%
  }
`

export const Post = ({ children }) => (
  <PostWrapper>
    {children}
  </PostWrapper>
)
