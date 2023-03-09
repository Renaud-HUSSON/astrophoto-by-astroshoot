import { createContext, useState } from "react";
import Flash from "../Flash";

export const FlashContext = createContext()

export const FlashProvider = ({children}) => {
  const [flash, setFlash] = useState({
    active: false,
    type: '',
    message: ''
  })

  return <FlashContext.Provider value={[flash, setFlash]}>
    {children}
    {
      flash.active
      ? <Flash />
      : <></>
    }
  </FlashContext.Provider>
}