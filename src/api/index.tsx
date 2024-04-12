import axios from 'axios'

export interface Product {
  id: string
  name: string
  price: number
  parcelamento: [number, number]
  color: string
  image: string
  size: string[]
  date: string
}

export async function filterProducts(params: {
  priceSortField?: 'price'
  dateSortField?: 'date'
  sortOrder?: 'asc' | 'desc'
  sizeIncludes?: string
  color?: string
  priceEquals?: number
  priceGT?: number
  priceLT?: number
}): Promise<Product[]> {
  let url = 'http://localhost:5000/products'

  // Construindo a query string baseada nos parâmetros fornecidos
  const queryParams: string[] = []
  if (params.priceSortField && params.sortOrder) {
    queryParams.push(
      `_sort=${params.priceSortField}&_order=${params.sortOrder}`,
    )
  }
  if (params.dateSortField && params.sortOrder) {
    queryParams.push(`_sort=${params.dateSortField}&_order=${params.sortOrder}`)
  }
  if (params.sizeIncludes) {
    queryParams.push(`size_like=${params.sizeIncludes}`)
  }
  if (params.color) {
    queryParams.push(`color=${params.color}`)
  }
  if (params.priceEquals) {
    queryParams.push(`price=${params.priceEquals}`)
  }
  if (params.priceLT) {
    queryParams.push(`price_lte=${params.priceLT}`)
  }
  if (params.priceGT) {
    queryParams.push(`price_gte=${params.priceGT}`)
  }

  if (queryParams.length > 0) {
    url += `?${queryParams.join('&')}`
  }

  try {
    const response = await axios.get(url)
    return response.data as Product[]
  } catch (error) {
    console.error('Erro ao filtrar os produtos:', error)
    return []
  }
}
