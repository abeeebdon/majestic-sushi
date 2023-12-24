import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart'
import Menu from './MENU/Menu'
import Home from './Home/Home'
import CartPage from './MENU/CartPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/cart/:id" element={<CartPage />} />

        <Route path="menu" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
