import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`
export const HomeContent = styled.div`
  width: 100%;
  height: calc(100vh - 91px);
  display: flex;

  overflow-y: scroll;
`

export const HomeGridWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;
  grid-template-areas: 'filters products';
  gap: 180px;
`

export const CardsGrid = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-area: products;
  gap: 32px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
