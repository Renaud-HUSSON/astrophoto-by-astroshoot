import { useContext, useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { FlashContext } from "../Context/FlashContext"

const SubmitButton = ({data, section, mode, succeed = () => '', correct=true, redirectPath=`/admin/${section}`}) => {
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [, setFlash] = useContext(FlashContext)

  //Reseting the state to false (useful when subscribing to newsletter)
  useEffect(() => {
    if(redirect){
      setRedirect(false)
    }
  }, [redirect])

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true)

    //Creating the FormData & fill it
    const form = new FormData()
    for(let i in data){
      form.append(i, data[i])
    }

    //Options for the request
    const options = {
      method: 'POST',
      body: form
    }

    const query = await fetch(`${process.env.REACT_APP_URL}api/${section}/${mode}.php`, options)

    const json = await query.json()
    setLoading(false)
    setFlash({active: true, type:Object.keys(json)[0], message: json[Object.keys(json)[0]]})
    setRedirect(true)
    if(json.hasOwnProperty('success')){
      if(typeof(succeed) === 'function'){
        succeed()
      }
    }
  }
  
  return <>
    <button disabled={!correct} onClick={handleClick}>{!loading ? 'Valider' : 'Chargement'}</button>
    {
      redirect
      ? <Redirect to={redirectPath} />
      : ''
    }
  </>
}

export default SubmitButton