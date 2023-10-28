const Cart = () => {
  return (
      <div className="container">
        <div className="grid-container">
        <div className="cart">
          <div>
            <h1 className="cart-text inline">CART</h1>
          </div>
        </div>

    

        <div className="sub">
          <div className="sub-wrapper">
            <div className="text">
              <div className="subtotal">
                <h1>Your Subtotal</h1>
                <div>
                  <p>Subtotal</p>
                  <p>$ <span id="amount">00</span>.00</p>
                </div>
                <div className="button">
                  <button>Confirm order</button>
                </div>
              </div>
            </div>
        
            
            <div className="text bg-white">
              <div className="subtotal">
                <h1>Promocode</h1>
                <div className="input">
                  <input type="text" placeholder="enter promo code" />
                </div>
                <div className="button">
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
         </div>
        <footer>
        <div class="footer">
          <p class="copyright">Copyright © 2021 Sushi Restaurant</p>
        </div>
        </footer>
    </div>
  )
}
export default Cart