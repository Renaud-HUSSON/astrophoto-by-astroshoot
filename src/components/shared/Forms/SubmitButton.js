import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { RedirectContext } from "../Context/RedirectContext"

const SubmitButton = ({data, section, mode, succeed = () => '', correct=true, redirectPath=`/admin/${section}`}) => {
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

    const query = await fetch(`${process.env.REACT_APP_URL}api/${section}/${mode}.php`, options)

    const json = await query.json()
    setLoading(false)
    console.log(json)
    if(json.hasOwnProperty('success')){
      if(typeof(succeed) === 'function'){
        succeed()
      }
      setRedirect(true)
    }
  }

  if(redirect){
    return <Redirect to={redirectPath} />
  }

  return <button disabled={!correct} onClick={handleClick}>{!loading ? 'Valider' : 'Chargement'}</button>
}

export default SubmitButton