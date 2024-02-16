import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Index'
import Menu from './pages/MENU/Menu'
import Home from './pages/Home/Home'
import CartPage from './pages/MENU/CartPage'
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
