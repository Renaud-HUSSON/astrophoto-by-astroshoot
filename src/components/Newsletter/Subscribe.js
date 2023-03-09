import { useEffect, useState } from "react"
import SimpleForm from "../shared/Forms/SimpleForm"
import SubmitButton from "../shared/Forms/SubmitButton"
import TextInput from "../shared/Forms/TextInput"

const Subscribe = () => {
  const [data, setData] = useState({
    newsletter_email: ''
  })

  const [correct, setCorrect] = useState(false)

  
  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(data.newsletter_email && data.newsletter_email.match(emailRegex)){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])

  const handleChange = (e) => {
    setData({newsletter_email: e.target.value})
  }

  return <SimpleForm>
    <TextInput onChange={handleChange} name="subscribe" label="Inscrivez vous à notre newsletter" placeholder="Votre adresse e-mail"/>
    <SubmitButton data={data} section="newsletter" mode="create" correct={correct} redirectPath="/"/>
  </SimpleForm>
}

export default Subscribe