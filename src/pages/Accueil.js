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

const Accueil = () => {
  let imagev1 = {title: "Nébuleuse 1", src:image1}
  let imagev2 = {title: "Nébuleuse 2", src:image2}
  let imagev3 = {title: "Nébuleuse 3", src:image3}
  const images = [imagev1, imagev2, imagev3]

  const fadeAnim = fadeIn(0.5);

  return <motion.div variants={fadeAnim} animate="visible" initial="visible" exit="exit" className="accueil">
    <div className="upper-content">
      <AccueilText />
      <motion.div animate={{opacity: 1, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0}} className="image-carousel-container">
        <ImageCarousel images={images}/>
      </motion.div>
    </div>
    <CardCarousel cards={[
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev2.src, title:imagev2.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev3.src, title:imagev3.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev2.src, title:imagev2.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev3.src, title:imagev3.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev2.src, title:imagev2.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev3.src, title:imagev3.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
    ]}/>
  </motion.div>
}

export default Accueil