import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { RedirectContext } from "../Context/RedirectContext"

const SubmitButton = ({data, section, mode, correct=true}) => {
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useContext(RedirectContext)

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData()
    
    for(let i in data){
      form.append(i, data[i])
    }

    const options = {
      method: 'POST',
      body: form
    }

    const update = await fetch(`http://localhost/astroshoot/api/${section}/${mode}.php`, options)

    const json = await update.json()
    setLoading(false)
    console.log(json)
    setRedirect(true)
  }

  if(redirect){
    return <Redirect to={`/admin/${section}`} />
  }

  return <button disabled={!correct} onClick={handleClick}>{!loading ? 'Valider' : 'Chargement'}</button>
}

export default SubmitButton