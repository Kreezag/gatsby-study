import React from "react"
import { ThemeProvider } from "styled-components"
import { Theme } from "./src/styles/theme"
import { GlobalStyles } from "./src/styles/globalStyles"
import { MDXProvider } from "@mdx-js/react"
import { Code } from "./src/components/code"
import { preToCodeBlock } from "mdx-utils"
import "./languages-tabs.css"

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
