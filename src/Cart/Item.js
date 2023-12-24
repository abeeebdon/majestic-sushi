const Item = ({
  item,
  handleCancel,
  handleDecrease,
  handleIncrease,
  valueSet,
}) => {
  const { name, price, src } = item

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
            <button className="btn" onClick={handleIncrease}>
              +
            </button>
          </div>
          <div className="result inline">
            <span className="results">{valueSet}</span>
          </div>

          <div className="decrease inline">
            <button className="btn" onClick={handleDecrease}>
              -
            </button>
          </div>
        </div>
        <div className="cancel-wrap padding">
          <div className="cancel">
            <button className="btn" onClick={handleCancel}>
              x
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Item
