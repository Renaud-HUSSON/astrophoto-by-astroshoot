import { Link, useParams } from "react-router-dom"

const ImageContainer = ({title, src, id, categorie}) => {

  return <Link to={`/${categorie}/${id}`} className="image-container">
    {
      src.match(/[.]mp4/)
      ? <video autoplay src={src}></video>
      : <img src={src} alt={title}/>
    }
      <p>{title}</p>
    </Link>
}

export default ImageContainer