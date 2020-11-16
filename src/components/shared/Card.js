import { Link } from "react-router-dom"

const Card = ({src, title, content}) => {
  return <div className="card" >
    <Link to="/nebuleuses">
      <div className="card-header">
        <img src={src} alt={title}/>
      </div>
      <p>{content}</p>
    </Link>
  </div>
}

export default Card