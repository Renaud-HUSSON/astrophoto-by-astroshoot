import { useContext } from "react"
import { Link } from "react-router-dom"
import { FlashContext } from "../../components/shared/Context/FlashContext"

const Sitemap = () => {
  const [, setFlash] = useContext(FlashContext)
  
  const generateSitemap = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}api/sitemap/generate.php`)
    const json = await response.json()

    setFlash({active: true, type:Object.keys(json)[0], message: json[Object.keys(json)[0]]})
  }
  
  return <div className="sitemap">
    <button onClick={generateSitemap}>Générer le sitemap</button>
    <Link className="button" to="/sitemap.xml" target="_blank" download>Télécharger le sitemap</Link>
  </div>
}

export default Sitemap