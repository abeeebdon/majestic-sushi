const Item = ({ item }) => {
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
            <button className="btn" id="btnIS">
              +
            </button>
          </div>
          <div className="result inline">
            <span className="results" id="result">
              0
            </span>
          </div>

          <div className="decrease inline">
            <button className="btn" id="btnDS">
              -
            </button>
          </div>
        </div>
        <div className="cancel-wrap padding">
          <div className="cancel">
            <button className="btn" id="btnCancel">
              x
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Item
