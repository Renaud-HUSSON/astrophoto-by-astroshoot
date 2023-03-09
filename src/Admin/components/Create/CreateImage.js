import { useEffect, useState } from 'react'
import TextInput from '../../../components/shared/Forms/TextInput'
import SelectInput from '../../../components/shared/Forms/SelectInput'
import FileInput from '../../../components/shared/Forms/FileInput'
import SubmitButton from '../../../components/shared/Forms/SubmitButton'

const CreateImage = ({section}) => {
  const supportedFilesType = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'video/mp4']

  const [correct, setCorrect] = useState(false)

  const [data, setData] = useState({
    titre: '',
    categorie: '',
    image: '',
    infobox: '',
    details: '',
    description: ''
  })

  useEffect(() => {
    if(data.titre && data.categorie && data.image !== ""){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleFileUpload = (e) => {
    if(supportedFilesType.includes(e.target.files[0].type)){
      setData({...data, [e.target.name]: e.target.files[0]})
    }
  }
  
  return <>
    <TextInput onChange={handleChange} label="Titre" name="titre"/>
    <SelectInput onChange={handleChange} label="Catégorie" name="categorie" section='categories' optionTitle="titre" optionValue='nom'/>
    <FileInput onChange={handleFileUpload} label="Sélectionnez une image" name="image" value={data.image['name']}/>
    <SelectInput onChange={handleChange} label="Infobox" name="infobox" section='infobox' optionTitle="nom" optionValue='nom'/>
    <TextInput multiline={true} onChange={handleChange} label="Détails" name="details"/>
    <TextInput multiline={true} onChange={handleChange} label="Description" name="description"/>
    <SubmitButton data={data} section={section} mode="create" correct={correct}/>
  </>
}

export default CreateImage