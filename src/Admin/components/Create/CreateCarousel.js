import { useEffect, useState } from "react"
import SubmitButton from '../shared/Forms/SubmitButton'
import SelectInput from '../shared/Forms/SelectInput'

const CreateCarousel = ({section}) => {
  const [correct, setCorrect] = useState(false)
  
  const [data, setData] = useState({
    image: ''
  })

  useEffect(() => {
    if(data.image !== ''){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return <>
    <SelectInput onChange={handleChange} value="" name="image" label="Image" section="images" optionValue="id" optionTitle="titre"/>
    <SubmitButton correct={correct} section={section} data={data} mode="create"/>
  </>
}

export default CreateCarousel