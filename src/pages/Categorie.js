import ImageContainer from '../components/Categorie/ImageContainer'
import image from '../images/nebuleuses/NGC6992-30-05-2020.jpg'//Framer Motion
//Animations
import {motion} from "framer-motion"
import {fadeIn} from '../animations/fade'

const Categorie = ({categorie, title}) => {
  const fadeAnim = fadeIn()

  return <motion.div variants={fadeAnim} animate="visible" initial="hidden" exit="exit" className="categorie-container">
    <h1>{title}</h1>
    <div className="categorie-images">
      <ImageContainer title="Nébuleuse" src={image}/>
      <ImageContainer title="Nébuleuse" src={image}/>
      <ImageContainer title="Nébuleuse" src={image}/>
      <ImageContainer title="Nébuleuse" src={image}/>
      <ImageContainer title="Nébuleuse" src={image}/>
      <ImageContainer title="Nébuleuse" src={image}/>
      <ImageContainer title="Nébuleuse" src={image}/>
      <ImageContainer title="Nébuleuse" src={image}/>
    </div>
  </motion.div>
}

export default Categorie