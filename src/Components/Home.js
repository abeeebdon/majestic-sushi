import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className="container">
      <div className="text">
        <h1 className="heading">
          Welcome to <span>Sushi </span>Restaurant
        </h1>
        <p>
          People eat with their eyes and Sushi creates an easy way for customers
          to order when they can see beautiful photos of your food
        </p>
      </div>

      <div className="link">
        <div>
          <NavLink to="menu">MENU</NavLink>
        </div>
        <div>
          <NavLink to="cart">CART</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Home
