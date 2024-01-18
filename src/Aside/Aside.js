import { icons } from '../Data'
import { NavLink } from 'react-router-dom'
const Aside = () => {
  return (
    <div className="icon-wrapper">
      {icons.map((icon) => {
        const { path, src, id } = icon
        return (
          <div className="icon">
            <NavLink to={path} className="icon-link">
              <img src={src} alt={id} className="image" />
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}
export default Aside
