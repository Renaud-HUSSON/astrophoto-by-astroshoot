import { useEffect, useState } from "react"
import useFetchData from "../../../components/shared/Hooks/useFetchData"
import Loading from "../../../components/shared/Loading"
import SubmitButton from "../shared/Forms/SubmitButton"
import SelectInput from '../shared/Forms/SelectInput'
import TextInput from '../shared/Forms/TextInput'

const UpdateCarousel = ({section, id}) => {
  const [data, setData] = useState({})

  const carouselData = useFetchData(`http://localhost/astroshoot/api/${section}/read_single.php?id=${id}`)
  const carousel = !carouselData[1] ? carouselData[0].data[0] : ''

  useEffect(() => {
    setData({
      'id': carousel.id,
      'image': carousel.image,
    })
  }, [carousel])

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return !carouselData[1] 
  ?<>
    <TextInput onChange={handleChange} label="ID" value={carousel.id} name="id" disabled/>
    <SelectInput onChange={handleChange} label="Image" name="image" value={carousel.image} section="images" fichier="read" optionValue="id" optionTitle="titre"/>
    <SubmitButton section={section} data={data} mode="update"/>
  </>
  : <Loading />
}

export default UpdateCarousel