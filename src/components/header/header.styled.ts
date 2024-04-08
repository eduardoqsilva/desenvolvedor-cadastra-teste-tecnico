import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: auto;
  background-color: ${(props) => props.theme.colors.white};
  padding: 24px;

  border-bottom: 2px solid ${(props) => props.theme.colors.gray01};
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .logo {
    width: 165px;
    height: 25px;
  }
`

interface CartButtonProps {
  $numberOfItens: number
}

export const CartButton = styled.button<CartButtonProps>`
  width: 38px;
  border: none;
  background: transparent;
  transition: all 0.2s ease;
  position: relative;

  > img {
    width: 100%;
    aspect-ratio: 1/1;
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    width: 10px;
    height: 10px;

    position: absolute;
    bottom: -5px;
    right: -5px;

    content: '${(props) => props.$numberOfItens}';
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 7px;

    font-size: 14px;
    font-weight: bold;
    background: ${(props) => props.theme.colors.primary};
  }
`
