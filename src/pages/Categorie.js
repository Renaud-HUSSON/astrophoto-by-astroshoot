//Components
import ImageContainer from '../components/Categorie/ImageContainer'
import Loading from '../components/shared/Loading'
//Animations
import {motion} from "framer-motion"
import {fadeIn} from '../animations/fade'
//Custom Hook to fetch data from an URL
import useFetchData from '../components/shared/Hooks/useFetchData'

const Categorie = ({categorie, title}) => {
  const fadeAnim = fadeIn()

  const images = useFetchData(`http://localhost/astroshoot/api/images/read_category.php?category=${categorie}`)

  return <motion.div variants={fadeAnim} animate="visible" initial="hidden" exit="exit" className="categorie-container">
    <h1>{title}</h1>
    <div className="categorie-images">
      {
        !images[1]
        ? images[0].data.map((image) => {
          const src = image.src.replace(/^(.*)([.](jpg|jpeg|png))$/, "$1-thumbnail$2")

          return <ImageContainer key={image.id} categorie={image.categorie} id={image.id} title={image.titre} src={`https://astrophoto-amateur.fr/${src}`}/>
        })
        : <Loading />
      }
    </div>
  </motion.div>
}

export default Categorie