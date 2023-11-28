import { items } from '../Data'
import Item from './Item'
const Shop = () => {
  return (
    <div className="shop">
      {items.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </div>
  )
}
export default Shop
