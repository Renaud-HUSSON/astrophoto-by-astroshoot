import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import {RedirectContext} from '../Context/RedirectContext'

const SubmitDeleteButton = ({section, id}) => {
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useContext(RedirectContext)

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true)

    const update = await fetch(`${process.env.REACT_APP_URL}api/${section}/delete.php?id=${id}&categorie=${section}`)

    const json = await update.json()
    setLoading(false)
    console.log(json)
    setRedirect(true);
  }

  if(redirect){
    return <Redirect to={`/admin/${section}`} />
  }

  return <button onClick={handleClick}>{!loading ? 'Valider' : 'Chargement'}</button>
}

export default SubmitDeleteButton