const Sub = () => {
  return (
    <div className="sub-wrapper">
      <div className="subtotal">
        <h1>Your Subtotal</h1>
        <div className="result">
          <p>
            Subtotal
            <span>$00.00</span>
          </p>
        </div>
        <div className="button">
          <button>Confirm order</button>
        </div>
      </div>

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
  )
}
export default Sub
