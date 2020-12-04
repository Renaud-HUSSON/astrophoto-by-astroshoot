import { motion } from "framer-motion"
import { fadeIn } from "../animations/fade"
import Unsubscribe from "../components/Newsletter/Unsubscribe"

const { default: Subscribe } = require("../components/Newsletter/Subscribe")

const Newsletter = () => {
  const pageTransition = fadeIn()
  
  return <motion.div variants={pageTransition} animate="visible" initial="hidden" exit="exit" className="newsletter-container">
    <h1>Notre newsletter</h1>
    <div className="">
      <Subscribe />
      <Unsubscribe />
    </div>
  </motion.div>
}

export default Newsletter