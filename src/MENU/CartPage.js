import { useParams } from 'react-router-dom'
import { foodItems } from '../Data'
const CartPage = () => {
  const { id } = useParams()
  const cart = foodItems.find((foodItem) => foodItem.id.toString() === id)
  console.log(cart)
  const { src, name } = cart
  return (
    <div>
      <img src={src} alt={name} className="img" />
    </div>
  )
}
export default CartPage
