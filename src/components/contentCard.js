import React from "react"
import "react-dom"
import styled from 'styled-components'
import { P, H2 } from './typography'
import { Link } from 'gatsby'

const ContentCardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonElement = styled((props) => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => props.theme.colors.main};
  color: #fff;
  border-radius: .5rem;
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;
  
  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`

const Button = ({ children, href }) => {
  return (
    <ButtonElement to={href}>
      {children}
    </ButtonElement>
  )
}

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <ContentCardWrapper>
      <P
        size="xSmall"
        textAlign="center"
        margin="0 0 0.5rem 0"
        color="dark2"
      >
        {date}
      </P>
      
      <H2
        textAlign="center"
        margin="0 0 1rem 0"
      >
        {title}
      </H2>
  
      <P
        size="small"
        textAlign="center"
        margin="0 0 1.5rem 0"
        color="dark2"
      >
        {excerpt}
      </P>
  
      <Button href={`/${slug}`}>
        Read more
      </Button>
    </ContentCardWrapper>
  )
}
