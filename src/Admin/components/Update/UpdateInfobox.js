import { useEffect, useState } from 'react'
import useFetchData from '../../../components/shared/Hooks/useFetchData'
import TextInput from '../../../components/shared/Forms/TextInput'
import SubmitButton from '../../../components/shared/Forms/SubmitButton'
import Loading from '../../../components/shared/Loading'

const UpdateInfobox = ({section, id}) => {
  const [data, setData] = useState({})

  const infoboxData = useFetchData(`http://localhost/astroshoot/api/${section}/read.php`)
  const infobox = !infoboxData[1] 
  ? infoboxData[0].data.filter(infobox => infobox.id === id)[0]
  : ''

  useEffect(() => setData({...infobox}), [infobox])

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return !infoboxData[1] 
  ?<>
    <TextInput onChange={handleChange} label="ID" name="id" value={infobox.id} disabled/>
    <TextInput onChange={handleChange} label="Type" name="type" value={infobox.type}/>
    <TextInput onChange={handleChange} label="Nom" name="nom" value={infobox.nom}/>
    <TextInput onChange={handleChange} label="Right Ascension" name="right_ascension" value={infobox.right_ascension}/>
    <TextInput onChange={handleChange} label="Déclinaison" name="declinaison" value={infobox.declinaison}/>
    <TextInput onChange={handleChange} label="Distance" name="distance" value={infobox.distance}/>
    <TextInput onChange={handleChange} label="Magnitude" name="magnitude" value={infobox.magnitude}/>
    <TextInput onChange={handleChange} label="Dimensions Apparentes" name="dimensions_apparentes" value={infobox.dimensions_apparentes}/>
    <TextInput onChange={handleChange} label="Constellation" name="constellation" value={infobox.constellation}/>
    <TextInput onChange={handleChange} label="Taille" name="taille" value={infobox.taille}/>
    <TextInput onChange={handleChange} label="Désignations" name="designations" value={infobox.designations}/>
    <SubmitButton section={section} data={data} mode="update"/>
  </>
  :<Loading />
}


export default UpdateInfobox