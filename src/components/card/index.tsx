import { CardContainer, ImageWrapper } from './card.styled'
import { Image } from '../image'
import { CardProps } from './cardTypes'
import { formatCurrency } from '../../utils/formatCurrency'
import { useCartItems } from '../../hooks/useCartItens'

export function Card({ img, price, split, title }: CardProps) {
  const { incrementCartItems } = useCartItems()

  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={img} alt="" />
      </ImageWrapper>
      <h3 className="title">{title}</h3>
      <span className="price">{formatCurrency(price)}</span>
      <span className="split">
        até {split[0]}x de {formatCurrency(split[1])}
      </span>
      <button onClick={incrementCartItems} className="buy">
        Add To Cart
      </button>
    </CardContainer>
  )
}
