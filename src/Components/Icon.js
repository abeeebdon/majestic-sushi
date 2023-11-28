import { NavLink } from 'react-router-dom'
const Icon = ({ icon }) => {
  const { path, src, id } = icon
  return (
    <div className="icon">
      <NavLink to={path} className="icon-link">
        <img src={src} alt={id} className="image" />
      </NavLink>
    </div>
  )
}
export default Icon
