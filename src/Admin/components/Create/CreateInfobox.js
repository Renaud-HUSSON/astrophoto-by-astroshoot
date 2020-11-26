import { useState } from "react"
import SubmitButton from "../shared/Forms/SubmitButton"
import TextInput from "../shared/Forms/TextInput"

const CreateInfobox = ({section}) => {
  const [data, setData] = useState({
    type: '',
    nom: '',
    right_ascension: '',
    declinaison: '',
    distance: '',
    magnitude: '',
    dimensions_apparentes: '',
    constellation: '',
    taille: '',
    designations: ''
  })
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return <>
    <TextInput onChange={handleChange} label="Type" name="type"/>
    <TextInput onChange={handleChange} label="Nom" name="nom"/>
    <TextInput onChange={handleChange} label="Right Ascension" name="right_ascension"/>
    <TextInput onChange={handleChange} label="Déclinaison" name="declinaison"/>
    <TextInput onChange={handleChange} label="Distance" name="distance"/>
    <TextInput onChange={handleChange} label="Magnitude" name="magnitude"/>
    <TextInput onChange={handleChange} label="Dimensions Apparentes" name="dimensions_apparentes"/>
    <TextInput onChange={handleChange} label="Constellation" name="constellation"/>
    <TextInput onChange={handleChange} label="Taille" name="taille"/>
    <TextInput onChange={handleChange} label="Désignations" name="designations"/>
    <SubmitButton section={section} data={data} mode="create"/>
  </>
}

export default CreateInfobox