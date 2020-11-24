import TextInput from '../shared/Forms/TextInput'
import useFetchData from '../../../components/shared/Hooks/useFetchData'
import Loading from '../../../components/shared/Loading'
import { useEffect, useState } from 'react'

const UpdateMateriel = ({section, id}) => {
  const [data, setData] = useState({})

  const materielData = useFetchData(`http://localhost/astroshoot/api/${section}/read.php`)
  const materiel = !materielData[1] ? materielData[0].data[0] :''

  useEffect(() => setData({...materiel}), [materiel])

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return !materielData[1] 
  ?<>
    <TextInput onChange={handleChange} label="ID" name="id" value={materiel.id} disabled/>
    <TextInput onChange={handleChange} label="Label" name="label" value={materiel.label}/>
    <TextInput onChange={handleChange} label="HREF" name="href" value={materiel.href}/>
  </>
  :<Loading />
}

export default UpdateMateriel