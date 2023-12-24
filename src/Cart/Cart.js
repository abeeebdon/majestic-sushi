import { useState, useEffect } from 'react'
import { foodItems } from '../Data'

import Aside from '../Aside/Aside'
import Shop from './Shop'
import Sub from './Sub'

const Cart = () => {
  const [items, setItems] = useState([])
  const [valueSet, setValueSet] = useState(0)

  const handleCheckOthers = () => {
    const loadItems = foodItems.filter((food) => food.id >= 5)
    setItems(loadItems)
  }
  useEffect(() => {
    const loadItems = foodItems.filter((food) => food.id <= 4)
    setItems(loadItems)
  }, [])

  const handleIncrease = () => {
    if (valueSet < 5) {
      setValueSet(valueSet + 1)
    } else {
      setValueSet(5)
    }
  }
  const handleDecrease = () => {
    if (valueSet > 0) {
      setValueSet(valueSet - 1)
    } else {
      setValueSet(0)
    }
  }
  const handleCancel = () => {
    setValueSet(0)
  }

  return (
    <section className="container">
      <div className="flex-container">
        <Aside />
        <div className="cart">
          <h1 className="cart-text inline">CART</h1>
          <Shop
            items={items}
            handleCancel={handleCancel}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            valueSet={valueSet}
            setValueSet={setValueSet}
          />
          <div className="check-others">
            <button className="check-others-btn" onClick={handleCheckOthers}>
              Check Other Foods
            </button>
          </div>
        </div>
        <Sub />
      </div>
    </section>
  )
}
export default Cart
