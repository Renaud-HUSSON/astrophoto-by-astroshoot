import { useEffect, useState } from "react"
import useFetchData from "../../../components/shared/Hooks/useFetchData"
import Loading from "../../../components/shared/Loading"
import SubmitButton from "../../../components/shared/Forms/SubmitButton"
import SelectInput from '../../../components/shared/Forms/SelectInput'
import TextInput from '../../../components/shared/Forms/TextInput'

const UpdateCarousel = ({section, id}) => {
  const [data, setData] = useState({})

  const carouselData = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read_single.php?id=${id}`)
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
    <SelectInput onChange={handleChange} label="Image" name="image" value={carousel.image} section="images" fichier="read" optionValue="id" optionTitle="id"/>
    <SubmitButton section={section} data={data} mode="update"/>
  </>
  : <Loading />
}

export default UpdateCarousel