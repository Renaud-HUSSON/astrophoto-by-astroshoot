import { Link } from "react-router-dom"

const Card = ({src, title, content, categorie}) => {
  
  return <div className="card" >
    <Link to={`/${categorie}`}>
      <div className="card-header">
        <img src={src} alt={title}/>
      </div>
      <p>{content}</p>
    </Link>
  </div>
}

export default Card