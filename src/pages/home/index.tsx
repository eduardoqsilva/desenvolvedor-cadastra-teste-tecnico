import { Card } from '../../components/card'
import { Header } from '../../components/header'
import {
  CardsGrid,
  HomeGridWrapper,
  HomeContainer,
  HomeContent,
} from './home.styled'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <HomeGridWrapper>
          <CardsGrid>
            {new Array(21).fill('').map((_, key) => (
              <Card key={key} />
            ))}
          </CardsGrid>
        </HomeGridWrapper>
      </HomeContent>
    </HomeContainer>
  )
}
