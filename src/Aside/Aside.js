import { icons } from '../Data'
import Icon from './Icon'
const Aside = () => {
  return (
    <div className="icon-wrapper">
      {icons.map((icon) => {
        return <Icon key={icon.id} icon={icon} />
      })}
    </div>
  )
}
export default Aside
