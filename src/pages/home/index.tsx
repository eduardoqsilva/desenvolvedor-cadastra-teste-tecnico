import { useEffect, useState } from 'react'
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
import { Product, filterProducts } from '../../api'
import { useSearchParams } from 'react-router-dom'
import { UsefiltersParams } from '../../hooks/useFiltersParams'
import { Footer } from '../../components/footer'

export function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = UsefiltersParams()

  async function GetProducts() {
    const filteredProducts = await filterProducts({ ...filters })
    setProducts(filteredProducts)
  }

  useEffect(() => {
    GetProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, filters])

  useEffect(() => {
    setSearchParams({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            {products &&
              products.map((item, key) => (
                <Card
                  img={item.image}
                  price={item.price}
                  split={item.parcelamento}
                  title={item.name}
                  key={key}
                />
              ))}
          </CardsGrid>
        </HomeGridWrapper>
      </HomeContent>
      <Footer />
    </HomeContainer>
  )
}
