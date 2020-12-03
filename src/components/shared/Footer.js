import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import SubmitButton from './Forms/SubmitButton'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const [data, setData] = useState({})
  const [correct, setCorrect] = useState(false)

  const location = useLocation();

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleInput = (e) => {
    if(e.target.value && e.target.value.match(emailRegex)){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
    setData({...data, [e.target.name]: e.target.value})
  }

  return <footer>
    <div className="line"></div>
    <div className="footer-content">
      <form className="newsletter">
        <label htmlFor="newsletter-input">Inscrivez vous à notre newsletter</label><br/>
        <input onChange={handleInput} type="email" placeholder="Votre adresse e-mail" name="newsletter-email" id="newsletter-input"/><br/>
        <SubmitButton redirectPath={location.pathname} mode="create" section="newsletter" data={data} correct={correct}/>
      </form>
      <div className="contact">
        <h3>Me contacter</h3>
        <p>maxime.degraeve@astrophoto-amateur.fr</p>
        <p><a href="https://www.instagram.com/astroshoot_/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram}/> Instagram</a></p>
      </div>
    </div>
  </footer>
}

export default Footer