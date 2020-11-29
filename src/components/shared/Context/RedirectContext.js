import {createContext, useState} from 'react'

export const RedirectContext = createContext()

export const RedirectContextProvider = ({children}) => {
  const [redirect, setRedirect] = useState(false)

  return <RedirectContext.Provider value={[redirect, setRedirect]}>
    {children}
  </RedirectContext.Provider>
}