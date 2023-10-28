import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Menu from './Components/Menu'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="cart" element={Cart} />
        <Route path="menu" element={Menu} />
      </Routes>
    </>
  )
}

export default App
