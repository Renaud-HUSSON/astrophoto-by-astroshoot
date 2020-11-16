import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <div className="contact">
      <h1>Me contacter</h1>
      <p>Adresse mail: maxime.degraeve@astrophoto-amateur.fr</p>
      <p>Vous pouvez me rejoindre sur instagram où je posterai également quelques photos.</p>
      <a href="https://www.instagram.com/astroshoot_" rel="noreferrer" target="_blank"><p><FontAwesomeIcon icon={faInstagram}/> Instagram</p></a>
    </div>
  )
}

export default Contact