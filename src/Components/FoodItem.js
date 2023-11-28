const FoodItem = ({ foodItem }) => {
  const { src, name } = foodItem
  return (
    <section className="grid-item">
      <div className="Food-item">
        <img src={src} alt="smashed_avo" className="image" />
        <p>{name}</p>
      </div>
    </section>
  )
}
export default FoodItem
