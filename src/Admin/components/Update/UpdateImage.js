import { useEffect, useState } from 'react'
import useFetchData from '../../../components/shared/Hooks/useFetchData'
import Loading from '../../../components/shared/Loading'
import TextInput from '../../../components/shared/Forms/TextInput'
import SelectInput from '../../../components/shared/Forms/SelectInput'
import SubmitButton from '../../../components/shared/Forms/SubmitButton'

const UpdateImage = ({section, id}) => {
  const [data, setData] = useState({})
  
  const imageData = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read_single.php?id=${id}`)
  const image = !imageData[1] ? imageData[0].data[0] : ''
  
  useEffect(() => setData({...image}), [image])

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return !imageData[1] 
  ?<>
    <TextInput onChange={handleChange} label='ID' name="id" value={image.id} disabled/>
    <TextInput onChange={handleChange} label='Titre' name="titre" value={image.titre} />
    <SelectInput onChange={handleChange} label='Catégorie' name="categorie" value={image.categorie} section="categories" optionValue="nom" optionTitle="titre"/>
    <TextInput onChange={handleChange} label='Source' name="src" value={image.src} disabled/>
    <SelectInput onChange={handleChange} label='Infobox' name="infobox" value={image.infobox} section="infobox" optionValue="nom" optionTitle="nom"/>
    <TextInput onChange={handleChange} label='Détails' name="details" value={image.details} multiline/>
    <TextInput onChange={handleChange} label='Description' name="description" value={image.description} multiline/>
    <SubmitButton section={section} data={data} mode="update"/>
  </>
  : <Loading />
}

export default UpdateImage