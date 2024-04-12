import { CartButton, HeaderContainer, HeaderContent } from './header.styled'
import logoIco from '../../assets/imgs/cadastra-logo.png'
import cardIco from '../../assets/svgs/cart-icon.svg'
import { useCartItems } from '../../hooks/useCartItens'

export function Header() {
  const { cartItems } = useCartItems()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img className="logo" src={logoIco} alt="logo cadastra" />
        <CartButton $numberOfItens={cartItems} className="cartButton">
          <img src={cardIco} alt="carrinho (sacola)" />
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
