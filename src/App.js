import { Routes, Route } from 'react-router-dom'
import Cart from './Cart/Cart'
import Menu from './MENU/Menu'
import Home from './Home/Home'
import CartPage from './MENU/CartPage'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/cart/:id" element={<CartPage />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
