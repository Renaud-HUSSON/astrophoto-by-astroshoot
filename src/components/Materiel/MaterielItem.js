import { useCallback, useRef } from "react"

const MaterielItem = ({title, src}) => {
  const input = useRef(null)

  const handleClick = useCallback(() => {
    if(input !== null){
      input.current.select()
      document.execCommand("copy");
    }
  }, [input])

  return <div className="materiel-item">
    <p>{title}</p>
    <input ref={input} type="text" value={src} readOnly/>
    <a rel="noreferrer" href={src} target="_blank"><button className="open">Ouvrir</button></a>
    <button className="copy" onClick={handleClick}>Copier</button>
  </div>
}

export default MaterielItem