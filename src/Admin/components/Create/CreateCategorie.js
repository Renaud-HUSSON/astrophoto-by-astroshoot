import { useEffect, useState } from "react"

const { default: SubmitButton } = require("../shared/Forms/SubmitButton")
const { default: TextInput } = require("../shared/Forms/TextInput")

const CreateCategorie = ({section}) => {
  const [correct, setCorrect] = useState(false)
  
  const [data, setData] = useState({
    titre: '',
    nom: ''
  })

  useEffect(() => {
    if(data.titre && data.nom){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return <>
    <TextInput onChange={handleChange} label="Titre" name="titre"/>
    <TextInput onChange={handleChange} label="Nom" name="nom" />
    <SubmitButton correct={correct} section={section} data={data} mode="create"/>
  </>
}

export default CreateCategorie