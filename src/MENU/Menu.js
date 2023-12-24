import Aside from '../Aside/Aside'
import FoodItems from './FoodItems'
const Menu = () => {
  return (
    <div className="container">
      <div className="menu-container">
        <Aside />
        <div>
          <div className="grid-text">
            <h1>SUSHI FOOD</h1>
          </div>
          <FoodItems />
          <div className="load-more">
            <button>Load more</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Menu
