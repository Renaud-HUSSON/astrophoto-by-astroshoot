import { useEffect, useState } from "react"

import SubmitButton from '../../../components/shared/Forms/SubmitButton'
import TextInput from '../../../components/shared/Forms/TextInput'

const CreateCategorie = ({section}) => {
  const [correct, setCorrect] = useState(false)
  
  const [data, setData] = useState({
    subject: '',
    message: ''
  })

  useEffect(() => {
    if(data.subject && data.message){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return <>
    <TextInput onChange={handleChange} label="Sujet" name="subject"/>
    <TextInput multiline={true} onChange={handleChange} label="Message" name="message" />
    <SubmitButton correct={correct} section={section} data={data} mode="send"/>
  </>
}

export default CreateCategorie