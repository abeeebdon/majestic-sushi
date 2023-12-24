import { NavLink } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'
import { useState, useEffect } from 'react'
const Home = () => {
  const [index, setIndex] = useState(0)
  const [background, setBackground] = useState([
    './restaurant.jpg',
    './BreakkieRoll.png',
    './sushi2.jpg',
  ])

  const handleLeft = () => {
    const newIndex = (index - 1 + background.length) % background.length
    setIndex(newIndex)
  }
  const handleRight = () => {
    const newIndex = (index + 1) % background.length
    setIndex(newIndex)
  }
  useEffect(() => {
    setTimeout(() => {
      const newIndex = (index + 1) % background.length
      setIndex(newIndex)
    }, 4000)
  }, [index])

  return (
    <>
      <img
        src={background[index]}
        className="background-image"
        alt="background-image"
      />
      <section className="home">
        <div className="home-text">
          <h1 className="heading">
            Welcome to <span>Sushi </span>Restaurant
          </h1>
          <p>
            People eat with their eyes and Sushi creates an easy way for
            customers to order when they can see beautiful photos of your food
          </p>
        </div>
        <div id="arrow-1" onClick={handleLeft}>
          <BiChevronLeft />
        </div>
        <div id="arrow-2" onClick={handleRight}>
          <BiChevronRight />
        </div>
        <div className="link">
          <div>
            <NavLink className="nav" to="menu">
              MENU
            </NavLink>
          </div>
          <div>
            <NavLink className="nav" to="cart">
              CART
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
