import { useContext, useEffect } from "react"
import { FlashContext } from "./Context/FlashContext"

const Flash = () => {
  const [flash, setFlash] = useContext(FlashContext)

  const clearTimer = window.setTimeout(() => {
    setFlash(false)
  }, 4000)
  
  useEffect(() => {
    return () => {
      window.clearTimeout(clearTimer)
    }
  })

  return <div className={`flash flash-${flash.type}`}>
    <p>
      {
        flash.message
      }
    </p>
  </div>
}

export default Flash