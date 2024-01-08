import { createContext, useContext, useState } from 'react'
import { foods } from '../Data'
const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)
const AppContext = ({ children }) => {
  const [myItem, setMyItem] = useState()
  const foodItems = { foods }

  return (
    <GlobalContext.Provider value={{ foodItems, myItem, setMyItem }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
