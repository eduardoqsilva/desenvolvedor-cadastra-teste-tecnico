import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Routes'
import { CartItemsProvider } from './contexts/cartContextItems'

function App() {
  return (
    <CartItemsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartItemsProvider>
  )
}

export default App
