import { Link } from 'react-router-dom'
import { foods } from '../Data'

const FoodItem = ({ foodItem }) => {
  const { src, name, id } = foodItem

  const handleClick = (id) => {
    const item = foods.filter((food) => food.id === id)
    console.log(item)
  }
  return (
    <Link to={`/cart/${id}`}>
      <section className="grid-item" onClick={(id) => handleClick(id)}>
        <div className="Food-item">
          <img src={src} alt={name} className="image" />
          <p>{name}</p>
        </div>
      </section>
    </Link>
  )
}
export default FoodItem
