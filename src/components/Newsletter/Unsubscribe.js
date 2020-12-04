import { useContext, useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { FlashContext } from "../shared/Context/FlashContext"
import SimpleForm from "../shared/Forms/SimpleForm"
import TextInput from "../shared/Forms/TextInput"

const Unsubscribe = () => {
  const [, setFlash] = useContext(FlashContext)

  const [data, setData] = useState({
    newsletter_email: ''
  })
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [correct, setCorrect] = useState(false)
  
  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(data.email && data.email.match(emailRegex)){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])

  const handleChange = (e) => {
    setData({email: e.target.value})
  }

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true)
    fetch(process.env.REACT_APP_URL + "api/newsletter/delete.php?email=" + data.email)
    .then(data => data.json())
    .then(json => {
      setFlash({active: true, type:Object.keys(json)[0], message: json[Object.keys(json)[0]]})
      setLoading(false)
    })

    setRedirect(true)
  }
  
  return <SimpleForm>
    <TextInput onChange={handleChange} name="unsubscribe" label="Désinscrivez vous à notre newsletter" placeholder="Votre adresse e-mail"/>
    <button onClick={handleClick} data={data} section="newsletter" disabled={!correct}>{loading ? "Chargement.." : "Valider"}</button>
    {
      redirect 
      ?<Redirect to="/"/>
      :<></>
    }
  </SimpleForm>
}

export default Unsubscribe