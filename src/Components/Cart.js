import Aside from '../Aside/Aside'
import Footer from './Footer'
import Shop from './Shop'
import Sub from './Sub'
const Cart = () => {
  return (
    <section className="container">
      <div className="flex-container">
        <Aside />
        <div className="cart">
          <h1 className="cart-text inline">CART</h1>
          <Shop />
        </div>
        <Sub />
      </div>
      <Footer />
    </section>
  )
}
export default Cart
