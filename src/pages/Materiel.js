//Components
import MaterielItem from '../components/Materiel/MaterielItem'
//Animations
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/fade'
//Custom Hook to fetch data from an URL
import useFetchData from '../components/shared/Hooks/useFetchData'
import Loading from '../components/shared/Loading'


const Materiel = () => {
  const fadeAnimation = fadeIn()

  const materiel = useFetchData(`${process.env.REACT_APP_URL}/api/materiel/read.php`);
  
  return <motion.div variants={fadeAnimation} animate="visible" initial="hidden" exit="exit" className="materiel-container">
    <h1>Mon matériel</h1>
    <div className="materiel-item-container">
      {
        !materiel[1]
        ? materiel[0].data.map(item => <MaterielItem key={item.id} title={item.label} src={item.href} />)
        : <Loading />
      }
    </div>
  </motion.div>
}

export default Materiel