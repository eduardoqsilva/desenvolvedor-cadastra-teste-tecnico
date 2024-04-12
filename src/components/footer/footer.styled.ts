import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white01};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  padding: 7px;
`
