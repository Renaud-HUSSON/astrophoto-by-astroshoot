// Components
import AccueilText from '../components/Accueil/AccueilText'
import ImageCarousel from '../components/Accueil/ImageCarousel'
import CardCarousel from '../components/Accueil/CardCarousel'
// Images
import image1 from '../images/nebuleuses/NGC6992-30-05-2020.jpg'
import image2 from '../images/nebuleuses/NGC6992-22-05-2020.jpg'
import image3 from '../images/nebuleuses/M8_Lagoon_Nebula.png'
//Animation
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/fade'
//Custom Hook to fetch data from an URL
import useFetchData from '../components/shared/Hooks/useFetchData'

const Accueil = () => {
  let imagev1 = {title: "Nébuleuse 1", src:image1}
  let imagev2 = {title: "Nébuleuse 2", src:image2}
  let imagev3 = {title: "Nébuleuse 3", src:image3}
  const images = [imagev1, imagev2, imagev3]

  const categories = useFetchData('http://localhost/astroshoot/api/categories/read_image.php')

  const fadeAnim = fadeIn();

  return <motion.div variants={fadeAnim} animate="visible" initial="visible" exit="exit" className="accueil">
    <div className="upper-content">
      <AccueilText />
      <motion.div animate={{opacity: 1, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0}} className="image-carousel-container">
        <ImageCarousel images={images}/>
      </motion.div>
    </div>
    {!categories[1]
    ?<CardCarousel cards={[
      categories[0].data.map(categorie => {
        return {src:`https://astrophoto-amateur.fr/${categorie.src.replace(/^(.*)([.](jpg|gif|png))$/, "$1-thumbnail$2")}`, title:categorie.titre, content:`${categorie.titre} | ${categorie.number} photos`, nom: categorie.nom}
      })
      
    ]}/>
    : ''
  }
  </motion.div>
}

export default Accueil