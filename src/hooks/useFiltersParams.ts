/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface UsefiltersProps {
  priceSortField?: 'price'
  dateSortField?: 'date'
  sortOrder?: 'asc' | 'desc'
  sizeIncludes?: string
  color?: string
  priceEquals?: number
  priceGT?: number
  priceLT?: number
}

export function UsefiltersParams() {
  const [searchParams] = useSearchParams()
  const [filtersState, setFiltersState] = useState<UsefiltersProps>({})
  const obj = Object.fromEntries(searchParams)
  const filters: any = {}

  useEffect(() => {
    console.log(obj)
    if (obj.range) {
      const regex = /([\d]+)-([\d]+)/
      const matches = obj.range.match(regex)
      const isSingleNumber = /^\d+$/.test(obj.range)

      if (isSingleNumber) {
        filters.priceGT = Number(obj.range)
        filters.sortOrder = 'desc'
      } else if (matches) {
        filters.priceLT = Number(matches[2])
        filters.priceGT = Number(matches[1])
        filters.sortOrder = 'desc'
      }
    }
    if (obj.color) {
      filters.color = obj.color
    }
    if (obj.size) {
      filters.sizeIncludes = obj.size
    }
    if (obj.order) {
      if (obj.order === 'recentes') {
        filters.dateSortField = 'date'
        filters.sortOrder = 'desc'
      }
      if (obj.order === 'menor') {
        filters.priceSortField = 'price'
        filters.sortOrder = 'asc'
      }
      if (obj.order === 'maior') {
        filters.priceSortField = 'price'
        filters.sortOrder = 'desc'
      }
    }

    setFiltersState(filters)
    console.log(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return filtersState
}
