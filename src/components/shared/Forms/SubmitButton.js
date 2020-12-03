import { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { FlashContext } from "../Context/FlashContext"

const SubmitButton = ({data, section, mode, succeed = () => '', correct=true, redirectPath=`/admin/${section}`}) => {
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [, setFlash] = useContext(FlashContext)

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
    setFlash({active: true, type:Object.keys(json)[0], message: json[Object.keys(json)[0]]})
    if(json.hasOwnProperty('success')){
      if(typeof(succeed) === 'function'){
        succeed()
      }
      setRedirect(true)
    }
  }
  
  return <>
    <button disabled={!correct} onClick={handleClick}>{!loading ? 'Valider' : 'Chargement'}</button>
    {
      redirect
      ? <Redirect to={redirectPath} />
      : <></>
    }
  </>
}

export default SubmitButton