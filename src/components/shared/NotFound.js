import { motion } from "framer-motion"
import { fadeIn } from "../../animations/fade"

const NotFound = () => {
  const pageTransition = fadeIn()

  return <motion.div variants={pageTransition} animate="visible" initial="hidden" exit="exit" className="not-found-container">
    <div className="not-found">
      <h1>404</h1>
      <p>PAGE NOT FOUND</p>
    </div>
  </motion.div>
}

export default NotFound