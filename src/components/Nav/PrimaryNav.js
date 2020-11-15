import React from 'react'
import useWindowSize from '../shared/Hooks/UseWindowSize'
import {Link} from 'react-router-dom'
import icon from '../../images/icon.png'

const PrimaryNav = React.memo(({handleNav, primaryNav, setPrimaryNav, closeNav}) => {
  //Window width, updates whenever the window resizes
  const windowWidth = useWindowSize().width

  //Toggles the primary nav on small devices
  const handlePrimaryNav = () => {
    setPrimaryNav(nav => !nav)
  }

  return <div className="primary-nav">
    <div className="left-side">
        <div  onClick={windowWidth >= 768 ? handleNav : handlePrimaryNav} className="burger-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      <Link onClick={closeNav} to="/">
        <img src={icon} alt="logo"/>
      </Link>
      <Link onClick={closeNav} to="/">
      <p>Astrophoto by AstroShoot</p>
      </Link>
    </div>
    <div className={`right-side ${windowWidth <= 768 ? primaryNav ? "active" : "" : ""}`}>
      <ul>
        <li><Link onClick={closeNav} to="/">Accueil</Link></li>
        <li className="image-categorie" onClick={handleNav}>Images</li>
        <li><Link onClick={closeNav} to="">Matériel</Link></li>
        <li><Link onClick={closeNav} to="">Informations</Link></li>
        <li><Link onClick={closeNav} to="">Commentaires</Link></li>
        <li><Link onClick={closeNav} to="">Calculs</Link></li>
      </ul>
    </div>
  </div>
})

export default PrimaryNav