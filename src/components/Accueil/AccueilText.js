//Framer Motion
import {motion} from 'framer-motion'

const AccueilText = () => {
  return <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5}}} initial={{opacity: 0, y: 150}} className="accueil-text">
    <h1>Accueil</h1>
    <p>Bonjour et bienvenue sur mon site, ici je partagerais mes images d'astrophotographie.</p>
    <p>L'astrophotographie est un mélange d'astronomie et de photographie qui consiste à prendre en photo des objets célestes tels que les galaxies, les nébuleuses, les planètes et bien d'autres astres.</p>
    <p>Voici quelques exemples de mes images:</p>
  </motion.div>
}

export default AccueilText