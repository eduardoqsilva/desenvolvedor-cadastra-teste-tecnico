import { useContext } from 'react'
import {
  CartItemsContext,
  CartItemsContextType,
} from '../contexts/cartContextItems'

export const useCartItems = (): CartItemsContextType => {
  const context = useContext(CartItemsContext)
  if (!context) {
    throw new Error(
      'useCartItems deve ser utilizado dentro de um CartItemsProvider',
    )
  }
  return context
}
