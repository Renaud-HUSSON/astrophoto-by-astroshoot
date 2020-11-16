import { useEffect } from "react"

export const Modal = ({children, modalOpened, setModalOpened}) => {

  escapeKeyHandler = (e) => {
    if(e.key === "Escape"){
      document.removeEventListener("keydown", escapeKeyHandler)
      setModalOpened(false)
    }
  }

  const clickHandler = (e) => {
    setModalOpened(false)
    document.removeEventListener("keydown", escapeKeyHandler)
  }
  
  useEffect(() => {
    if(modalOpened){
      document.addEventListener("keydown", escapeKeyHandler)
      document.body.setAttribute("modal-opened", true)
    }else{
      document.body.removeAttribute("modal-opened")
    }
  }, [modalOpened])
  
  return <div onClick={clickHandler} className={`modal-container ${modalOpened ? "modal-active" : ""}`}>
    <div className="modal">
      {children}
    </div>
  </div>
}

export const CloseModal = ({children, setModalOpened}) => {
  const clickHandler = () => {
    setModalOpened(false)
    document.removeEventListener("keydown", escapeKeyHandler)
  }
  
  return <button onClick={clickHandler} className="close-modal">
    {children}
  </button>
}

var escapeKeyHandler;