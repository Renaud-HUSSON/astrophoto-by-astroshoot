//Components
import About from '../components/Informations/About'
import Contact from '../components/Informations/Contact'
import Links from '../components/Informations/Links'
//Animations
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/fade'
import { Helmet } from 'react-helmet-async'

const Informations = () => {
  const pageTransition = fadeIn()

  return <motion.div variants={pageTransition} animate="visible" initial="hidden" exit="exit" className="informations-container">
    <Helmet>
      <title>Informations</title>
      <meta name="description" content="Informations me concernant, comment me contacter, qui je suis et quelques site que je recommande"/> 
    </Helmet>
    <About />
    <Contact />
    <Links />
  </motion.div>
}

export default Informations