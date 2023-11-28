import { NavLink } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'
const Home = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1 className="heading">
          Welcome to <span>Sushi </span>Restaurant
        </h1>
        <p>
          People eat with their eyes and Sushi creates an easy way for customers
          to order when they can see beautiful photos of your food
        </p>
      </div>
      <div id="arrow-1">
        <BiChevronLeft />
      </div>
      <div id="arrow-2">
        <BiChevronRight />
      </div>
      <div className="link">
        <div>
          <NavLink className="nav" to="menu">
            MENU
          </NavLink>
        </div>
        <div>
          <NavLink className="nav" to="cart">
            CART
          </NavLink>
        </div>
      </div>
    </section>
  )
}
export default Home
