//Components
import Card from '../shared/Card'
import ScrollContainer from 'react-indiana-drag-scroll'
//Framer Motion
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const CardCarousel = ({cards}) => {
  return <div className="card-carousel-container"> 
    <ScrollContainer hideScrollbars={false} className="carousel">
      {cards.map((card, i) => {
        const variants = {
          visible: {opacity: 1, y: 0, transition: {ease: "easeIn", duration: 0.3, delay: 0.3 + i*0.1}},
          hidden: {opacity: 0, y: 150}
        }

        return (
          <motion.div variants={variants} animate="visible" initial="hidden" key={i} className="carousel-item">
            <Card src={card.src} title={card.title} content={card.content}/>
          </motion.div>
        )
      })}
    </ScrollContainer>
  </div>
}

export default CardCarousel