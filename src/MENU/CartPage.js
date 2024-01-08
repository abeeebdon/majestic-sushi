import { useParams, useNavigate } from 'react-router-dom'
import { foods } from '../Data'

const CartPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const cart = foods.find((foodItem) => foodItem.id.toString() === id)
  const { src, name } = cart

  const handleOrder = () => {
    navigate('/cart')
  }
  const handleGoBack = () => {
    navigate('/menu')
  }

  return (
    <article className="cart-page">
      <h2>{name}</h2>
      <img src={`.${src}`} alt={name} className="cart-img" />
      <p>
        This HTML file is a template. If you open it directly in the browser,
        you will see an empty page. You can add webfonts, meta tags, or
        analytics to this file. The build step will place the bundled scripts
        into the. To begin the development, run `npm start` or `yarn start`. To
        create a production bundle, use `npm run build` or `yarn build
      </p>
      <button className="cart-btn" onClick={handleOrder}>
        Order Now
      </button>
      <button className="cart-btn" onClick={handleGoBack}>
        Go Back
      </button>
    </article>
  )
}
export default CartPage
