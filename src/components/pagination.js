import React from "react"
import "react-dom"
import styled from "styled-components"
import { Link } from "gatsby"

const PaginationWrapper = styled.nav`
  grid-column: 2 / span 12;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${props =>
      props.isFirst ? props.theme.colors.dark2 : props.theme.colors.dark};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
  }
  a:nth-child(2) {
    color: ${props =>
      props.isLast ? props.theme.colors.dark2 : props.theme.colors.dark};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
  }
`

const PaginationItem = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper
      isFirst={isFirst}
      isLast={isLast}
    >
      <PaginationItem to={prevPage}>
        Previous Page
      </PaginationItem>

      <PaginationItem to={nextPage}>
        Next Page
      </PaginationItem>
    </PaginationWrapper>
  )
}
