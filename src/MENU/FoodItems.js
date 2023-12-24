import { foodItems } from '../Data'
import FoodItem from './FoodItem'
const FoodItems = () => {
  return (
    <div className="grid-container">
      {foodItems.map((foodItem) => {
        return <FoodItem key={foodItem.id} foodItem={foodItem} />
      })}
    </div>
  )
}
export default FoodItems
