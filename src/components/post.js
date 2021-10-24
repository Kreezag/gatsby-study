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
`

export const Post = ({ children }) => (
  <PostWrapper>
    {children}
  </PostWrapper>
)
