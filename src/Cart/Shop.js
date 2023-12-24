import Item from './Item'
const Shop = ({
  items,
  handleCancel,
  handleDecrease,
  handleIncrease,
  valueSet,
}) => {
  return (
    <div className="shop">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleCancel={handleCancel}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            valueSet={valueSet}
          />
        )
      })}
    </div>
  )
}
export default Shop
