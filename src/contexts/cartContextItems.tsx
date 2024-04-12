import { ReactNode, createContext, useState } from 'react'

export interface CartItemsContextType {
  cartItems: number
  incrementCartItems: () => void
}

export const CartItemsContext = createContext<CartItemsContextType | undefined>(
  undefined,
)

interface CartItemsProviderProps {
  children: ReactNode
}
export function CartItemsProvider({ children }: CartItemsProviderProps) {
  const [cartItems, setCartItems] = useState<number>(0)

  const incrementCartItems = () => {
    setCartItems((prevItems) => prevItems + 1)
  }

  const contextValue: CartItemsContextType = {
    cartItems,
    incrementCartItems,
  }

  return (
    <CartItemsContext.Provider value={contextValue}>
      {children}
    </CartItemsContext.Provider>
  )
}
