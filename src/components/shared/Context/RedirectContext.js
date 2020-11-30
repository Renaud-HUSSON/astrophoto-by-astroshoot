import {createContext, useEffect, useState} from 'react'

export const RedirectContext = createContext()

export const RedirectContextProvider = ({children}) => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if(redirect){
      setRedirect(false)
    }
  }, [redirect, setRedirect])

  return <RedirectContext.Provider value={[redirect, setRedirect]}>
    {children}
  </RedirectContext.Provider>
}