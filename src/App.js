import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Menu from './Components/Menu'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
