const Sub = ({ totalPrice }) => {
  return (
    <div className="sub-wrapper">
      <div className="subtotal">
        <h1>Your Subtotal</h1>
        <div className="result">
          <p>
            Subtotal:
            <span>{` $${totalPrice}.00`}</span>
          </p>
        </div>
        <div className="btn">
          <button>Confirm order</button>
        </div>
      </div>

      <div className="subtotal">
        <h1>Promocode</h1>
        <div className="input">
          <input type="text" placeholder="enter promo code" />
        </div>
        <div className="btn">
          <button>Apply</button>
        </div>
      </div>
    </div>
  )
}
export default Sub
