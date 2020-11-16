import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'

const ImageCarousel = ({images}) => {
  const [x, setX]= useState(0)
  
  const goLeft = () => {
    x === 0 ? setX((images.length - 1) * -100) : setX(x => x + 100)
  }

  const goRight = useCallback(() => {
    x === -100 * (images.length - 1) ? setX(0) : setX(x => x - 100)
  }, [images.length, x])

  useEffect(() => {
    const timeout = setInterval(goRight, 4000)

    return () => clearInterval(timeout)
  }, [x, goRight])

  return <div className="carousel">
    {images.map((item, index) => {
      return (
          <img key={index} className="carousel-item" style={{transform: `translateX(${x}%)`}} src={item.src} alt={item.title} />
      )
    })}
    <FontAwesomeIcon onClick={goLeft} className="goLeft" icon={faChevronLeft} size="2x"/>
    <FontAwesomeIcon onClick={goRight} className="goRight" icon={faChevronRight} size="2x"/>
  </div>
}

export default ImageCarousel