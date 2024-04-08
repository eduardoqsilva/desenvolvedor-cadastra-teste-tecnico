import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.font.default};
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white01};
  }

  /* Firefox (uncomment to work in Firefox, although other properties will not work!)  */
  /** {
  scrollbar-width: thin;
  }*/

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    margin-top: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.white01};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${(props) => props.theme.colors.white01};
  }

  *::-webkit-scrollbar-track:active {
    background-color: ${(props) => props.theme.colors.white01};
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color:${(props) => props.theme.colors.primary};
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  *::-webkit-scrollbar-thumb:active {
    background-color:${(props) => props.theme.colors.primary};
  }
`
