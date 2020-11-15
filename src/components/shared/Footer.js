import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return <footer>
    <div className="line"></div>
    <div className="footer-content">
      <form className="newsletter">
        <label htmlFor="newsletter-input">Inscrivez vous à notre newsletter</label><br/>
        <input type="email" placeholder="Votre adresse e-mail" name="newsletter-input" id="newsletter-input"/><br/>
        <button>Valider</button>
      </form>
      <div className="contact">
        <h3>Me contacter</h3>
        <p>maxime.degraeve@astrophoto-amateur.fr</p>
        <p><a href="https://www.instagram.com/astroshoot_/" target="_blank"><FontAwesomeIcon icon={faInstagram}/>Instagram</a></p>
      </div>
    </div>
  </footer>
}

export default Footer