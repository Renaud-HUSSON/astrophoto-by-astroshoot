import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { FlashContext } from "../Context/FlashContext"

const SubmitDeleteButton = ({section, id, categorie=""}) => {
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [, setFlash] = useContext(FlashContext)

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true)

    const update = await fetch(`${process.env.REACT_APP_URL}api/${section}/delete.php?id=${id}${categorie !== '' ? `&categorie=${categorie}` : ''}`)

    const json = await update.json()
    setLoading(false)
    setFlash({active: true, type:Object.keys(json)[0], message: json[Object.keys(json)[0]]})
    setRedirect(true);
  }

  if(redirect){
    return <Redirect to={`/admin/${section}`} />
  }

  return <button onClick={handleClick}>{!loading ? 'Valider' : 'Chargement'}</button>
}

export default SubmitDeleteButton