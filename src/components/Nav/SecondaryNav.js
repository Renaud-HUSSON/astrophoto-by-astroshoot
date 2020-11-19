import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import useFetchData from '../shared/Hooks/useFetchData'
import Loading from '../shared/Loading'

const SecondaryNav = ({nav, handleNav, closeNav}) => {
  const categories = useFetchData('http://localhost/astroshoot/api/category/read.php')

  return <div className={`secondary-nav ${nav ? "active" : ""}`}>
    <div className="header">
      <FontAwesomeIcon onClick={handleNav} className="icon" icon={faChevronLeft} size="2x"/>
      <p>Images</p>
    </div>
    <ul className="image-categories">
    {
      !categories[1] 
      ? categories[0]['data'].map((categorie) => {
          return <Link key={categorie.id} to={`/${categorie.nom}`}>
            <div onClick={closeNav} className="image-categorie">
              <li className="categorie">{categorie.titre}</li>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Link>
        })
      : <Loading />
    }
    </ul>
  </div>
}

export default SecondaryNav