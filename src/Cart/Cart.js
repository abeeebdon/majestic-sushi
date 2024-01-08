import { useState, useEffect } from 'react'
import Aside from '../Aside/Aside'
import Sub from './Sub'
import Item from './Item'
import { foods } from '../Data'
const Cart = () => {
  const [items, setItems] = useState(foods)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleIncrease = (id) => {
    // const newItems = items.find((item) => item.id === id)
    // newItems.amount = newItems.amount + 1
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    setItems(newItems)
  }
  const handleDecrease = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 }
      }
      return item
    })
    setItems(newItems)
  }
  const handleCancel = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }
  useEffect(() => {
    let price = 0
    items.map((item) => {
      const newPrice = item.amount * item.price
      price += newPrice
    })

    setTotalPrice(price)
  }, [items])

  return (
    <section className="container">
      <div className="flex-container">
        <Aside />
        <div className="cart">
          <h1 className="cart-text inline">CART</h1>

          <div className="shop">
            {items.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  setItems={setItems}
                  items={items}
                  handleCancel={handleCancel}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
              )
            })}
          </div>
        </div>
        <Sub totalPrice={totalPrice} />
      </div>
    </section>
  )
}
export default Cart
