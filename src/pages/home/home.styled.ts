import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const HomeContent = styled.div`
  width: 100%;
  flex: 1;

  overflow-y: scroll;
`

export const HomeGridWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: 'filters products';
  gap: 32px;
`

export const CardsGrid = styled.main`
  width: 100%;
  height: min-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: fit-content;
  grid-area: products;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const TitleCategory = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  line-height: 43.58px;

  max-width: 1300px;
  margin: 40px auto;
`

export const OrderByContainer = styled.div`
  width: 100%;
  height: fit-content;

  position: relative;
`
