import { useEffect, useState } from "react"
import SubmitButton from "../../../components/shared/Forms/SubmitButton"
import TextInput from "../../../components/shared/Forms/TextInput"

const CreateMateriel = ({section}) => {
  const [correct, setCorrect] = useState(false)
  
  const [data, setData] = useState({
    label: '',
    href: ''
  })

  useEffect(() => {
    if(data.label && data.href){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  
  return <>
    <TextInput onChange={handleChange} label="Label" name="label"/>
    <TextInput onChange={handleChange} label="HREF" name="href"/>
    <SubmitButton correct={correct} section={section} data={data} mode="create"/>
  </>
}

export default CreateMateriel