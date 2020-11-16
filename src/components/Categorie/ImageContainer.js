import { Link } from "react-router-dom"

const ImageContainer = ({title, src}) => {
  return <Link to="/nebuleuses/54" className="image-container">
      <img src={src} alt={title}/>
      <p>{title}</p>
    </Link>
}

export default ImageContainer