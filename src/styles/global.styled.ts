import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.font.default};
    color: ${props => props.theme.colors.black};
  }
`