import { CardContainer, ImageWrapper } from './card.styled'
import { Image } from '../image'

export function Card() {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image
          src="https://s3-alpha-sig.figma.com/img/1aee/06be/741dbfd0fd969466f86fee9dd4c83b69?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGM7BmSWWiMtYn~885s4KaVCNKf54FKnUEOQYOnTapFF0XmM3ha6CEFet6QwUyUwwYVwMPFxqijQshcEzgsWiKqXWIl4tH7cwCHxDUIPF5QJdJzZsHg2hPWqxkTcUspSTd-Cuv5qGOVyktGBtSiGYQfxcs8fDE7PRtLW5AFPieMroX6MVodMufqKQ5oRseCABMLPtBch3~XkPQRfk0LBrxKs3f5DnvyzzXS-9SEf7tey7Lzm8YHwIj4RNC59Mi1JAJaEMFsDgDecuUk-uiisK9Pqdx3VdivHKVg6PPmyqRYDVJ8xUczoSZk6hk645jv-KL1~QJw1HrWz1Ot-NT~AEg__"
          alt=""
        />
      </ImageWrapper>
      <h3 className="title">Camiseta Mescla</h3>
      <span className="price">28,00</span>
      <span className="split">até 3x de R$9,33</span>
      <button className="buy">Comprar</button>
    </CardContainer>
  )
}
