import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global.styled.ts'
import { defaultTheme } from './styles/themes/default.ts'
import './styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
