import { CardContainer, ImageWrapper } from './card.styled'
import { Image } from '../image'
import { CardProps } from './cardTypes'
import { formatCurrency } from '../../utils/formatCurrency'

export function Card({ img, price, split, title }: CardProps) {
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
      <button className="buy">Comprar</button>
    </CardContainer>
  )
}
