import { Card } from '../../components/card'
import { Header } from '../../components/header'
import { Filters } from './components/filters'
import { OrderBy } from './components/orderBy'
import {
  CardsGrid,
  HomeGridWrapper,
  HomeContainer,
  HomeContent,
  TitleCategory,
  OrderByContainer,
} from './home.styled'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <TitleCategory>Blusas</TitleCategory>
        <HomeGridWrapper>
          <Filters />
          <OrderByContainer>
            <OrderBy />
          </OrderByContainer>
          <CardsGrid>
            {new Array(20).fill('').map((_, key) => (
              <Card key={key} />
            ))}
          </CardsGrid>
        </HomeGridWrapper>
      </HomeContent>
    </HomeContainer>
  )
}
