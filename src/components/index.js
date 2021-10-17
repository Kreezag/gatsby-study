import React from "react"
import "react-dom"
import { ContainerWrapper } from "../styles/elements"

const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
)

export { Container }
