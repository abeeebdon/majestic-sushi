const Aside = () => {
  return (
    <div className="icon-wrapper">
      <div className="icon">
        <a href="#">
          <img src="./menu_images/s.png" alt="" />
        </a>
      </div>
      <div className="icon" id="home">
        <a href="index.html">
          <img src="./menu_images/home.png" alt="" />
        </a>
      </div>
      <div className="icon" id="menu">
        <a href="menu.html">
          <img src="./menu_images/restaurant_menu_.png" alt="" />
        </a>
      </div>
      <div className="icon" id="cart">
        <a href="cart.html">
          <img src="./menu_images/shopping_cart.png" alt="" />
        </a>
      </div>

      <div className="icon">
        <a href="#">
          <img src="./menu_images/location.png" alt="" />
        </a>
      </div>
      <div className="icon">
        <a href="#">
          <img src="./menu_images/Vector(2).png" alt="" />
        </a>
      </div>
    </div>
  )
}
export default Aside
