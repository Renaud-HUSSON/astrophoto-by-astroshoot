import TextInput from '../../../components/shared/Forms/TextInput'
import useFetchData from '../../../components/shared/Hooks/useFetchData'
import Loading from '../../../components/shared/Loading'
import SelectInput from '../../../components/shared/Forms/SelectInput'
import { useEffect, useState } from 'react'
import SubmitButton from '../../../components/shared/Forms/SubmitButton'


const UpdateCategorie = ({section, id}) => {
  const [data, setData] = useState({})

  const categorieData = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read_single.php?id=${id}`)
  const categorie = !categorieData[1] ? categorieData[0].data[0] : ''
  const oldname = !categorieData[1] ? categorie.nom : ''

  useEffect(() => {
    setData({
      'id': categorie.id,
      'titre': categorie.titre,
      'nom': categorie.nom,
      'nombre': categorie.nom,
      'image': categorie.image,
      'oldname': oldname
    })
  }, [categorie, oldname])

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return !categorieData[1] 
  ?<>
    <TextInput onChange={handleChange} label="ID" value={categorie.id} name="id" disabled/>
    <TextInput onChange={handleChange} label="Titre" value={categorie.titre} name="titre"/>
    <TextInput onChange={handleChange} label="Nom" value={categorie.nom} name="nom" />
    <TextInput onChange={handleChange} label="Nombre" value={categorie.number} name="number" disabled/>
    <SelectInput onChange={handleChange} label="Image" name="image" value={categorie.image} section="images" fichier="read_category" condition={`?category=${categorie.nom}`} optionValue="id" optionTitle="titre"/>
    <SubmitButton section={section} data={data} mode="update"/>
  </>
  : <Loading />
}

export default UpdateCategorie