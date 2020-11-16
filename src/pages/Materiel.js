//Components
import MaterielItem from '../components/Materiel/MaterielItem'
//Animations
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/fade'

const Materiel = () => {
  const fadeAnimation = fadeIn()
  
  return <motion.div variants={fadeAnimation} animate="visible" initial="hidden" exit="exit" className="materiel-container">
    <h1>Mon matériel</h1>
    <div className="materiel-item-container">
      <MaterielItem title="Le télescope" src="https://astrophoto-amateur.fr"/>
    </div>
  </motion.div>
}

export default Materiel