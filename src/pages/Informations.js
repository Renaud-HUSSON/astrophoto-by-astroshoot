//Components
import About from '../components/Informations/About'
import Contact from '../components/Informations/Contact'
import Links from '../components/Informations/Links'
//Animations
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/fade'

const Informations = () => {
  const pageTransition = fadeIn()

  return <motion.div variants={pageTransition} animate="visible" initial="hidden" exit="exit" className="informations-container">
    <About />
    <Contact />
    <Links />
  </motion.div>
}

export default Informations