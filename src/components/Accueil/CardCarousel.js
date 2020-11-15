import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useRef, useState } from 'react'
import Card from '../shared/Card'

const CardCarousel = ({cards}) => {
  const [x, setX]= useState(0)
  const carouselContainer = useRef(null)
  const carouselItem = useRef(null)
  
  const goLeft = () => {
    x === 0 ? setX((cards.length - Math.floor(carouselContainer.current.offsetWidth / carouselItem.current.offsetWidth)) * -100) : setX(x => x + 100)
  }

  const goRight = useCallback(() => {
    x === -100 * (cards.length - Math.floor(carouselContainer.current.offsetWidth / carouselItem.current.offsetWidth)) ? setX(0) : setX(x => x - 100)
  }, [cards.length, x])

  useEffect(() => {
    const timeout = setInterval(goRight, 4000)
    return () => clearInterval(timeout)
  }, [x, goRight])

  return <div className="card-carousel-container" ref={carouselContainer}> 
    <div className="carousel">
      {cards.map((card, i) => {
        return (
          <div key={i} className="carousel-item" style={{transform: `translateX(${x}%)`}} ref={carouselItem}>
            <Card src={card.src} title={card.title} content={card.content}/>
          </div>
        )
      })}
    </div>
    <FontAwesomeIcon onClick={goLeft} className="goLeft" icon={faChevronLeft} size="2x"/>
    <FontAwesomeIcon onClick={goRight} className="goRight" icon={faChevronRight} size="2x"/>
  </div>
}

export default CardCarousel