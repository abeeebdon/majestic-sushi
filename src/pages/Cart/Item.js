const Item = ({ item, handleIncrease, handleDecrease, handleCancel }) => {
  const { name, price, src, id, amount } = item
  // const activeItem = activeItems.find((item) => item.id === id)
  // const amount = activeItem?.amount

  return (
    <section className="food-type">
      <div className="food">
        <div className="img">
          <img src={src} alt={name} className="img" />
        </div>
        <div className="food-name">
          <p>{name}</p>
          <p>
            <span className="price">{price}</span>.00
          </p>
        </div>
        <div className="math-wrap padding">
          <div className="add inline">
            <button className="btn" onClick={() => handleIncrease(id)}>
              +
            </button>
          </div>
          <div className="result inline">
            <span className="results">{amount}</span>
          </div>

          <div className="decrease inline">
            <button className="btn" onClick={() => handleDecrease(id)}>
              -
            </button>
          </div>
        </div>
        <div className="cancel-wrap padding">
          <button className="btn" onClick={() => handleCancel(id)}>
            x
          </button>
        </div>
      </div>
    </section>
  )
}
export default Item
