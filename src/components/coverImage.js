import "react-dom"
import styled from 'styled-components';


const CoverImageWrapper = styled.div`
  grid-column: 3 span / 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 span / 6;
  }
`

const CoverImage = styled.div`
`

export const CoverImage = ({ children }) => (
  <CoverImageWrapper>
    {children}
  </CoverImageWrapper>
)
