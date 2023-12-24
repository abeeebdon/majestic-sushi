import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)
const AppContext = ({ children }) => {
  const [valueSet, setValueSet] = useState(0)

  return (
    <GlobalContext.Provider value={{ valueSet, setValueSet }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
