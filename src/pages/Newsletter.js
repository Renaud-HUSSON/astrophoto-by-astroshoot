//Components
import Unsubscribe from "../components/Newsletter/Unsubscribe"
//Animations
import { motion } from "framer-motion"
import { fadeIn } from "../animations/fade"
//React Helmet
import { Helmet } from "react-helmet-async"

const { default: Subscribe } = require("../components/Newsletter/Subscribe")

const Newsletter = () => {
  const pageTransition = fadeIn()
  
  return <motion.div variants={pageTransition} animate="visible" initial="hidden" exit="exit" className="newsletter-container">
    <Helmet>
      <title>Newsletter</title>
      <meta name="description" content="Sur cette page vous pouvez vous inscrire/désinscrire à notre newsletter"/>
    </Helmet>
    <h1>Notre newsletter</h1>
    <div className="">
      <Subscribe />
      <Unsubscribe />
    </div>
  </motion.div>
}

export default Newsletter