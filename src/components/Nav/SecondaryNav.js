import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const SecondaryNav = ({nav, handleNav, closeNav}) => {
  return <div className={`secondary-nav ${nav ? "active" : ""}`}>
    <div className="header">
      <FontAwesomeIcon onClick={handleNav} className="icon" icon={faChevronLeft} size="2x"/>
      <p>Images</p>
    </div>
    <ul className="image-categories">
      {/* In the future, we're gonna fetch different categories from a database, and map over it */}
      <Link to="/">
        <div onClick={closeNav} className="image-categorie">
          <li className="categorie">Les Nébuleuses</li>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </Link>
    </ul>
  </div>
}

export default SecondaryNav