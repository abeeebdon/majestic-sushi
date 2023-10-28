const Menu = () => {
  return (
    <div className="flex-item">
      <section className="grid-text">
        <div className="text">
          <div className="text-container">
            <h1>SUSHI FOOD</h1>
          </div>
        </div>
      </section>

      <div className="grid-container">
        The div belows output from a javascript Array of the food items{' '}
      </div>
      <section className="loadMore">
        <div className="load-more">
          <div className="btn">
            <button>Load more</button>
          </div>
        </div>
      </section>
      <section className="footer">
        <footer>
          <div>
            <p className="copyright">Copyright © 2021 Sushi Restaurant</p>
          </div>
        </footer>
      </section>
    </div>
  )
}
export default Menu
