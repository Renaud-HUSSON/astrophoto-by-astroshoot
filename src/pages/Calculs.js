//This page is a mess
import { useState } from "react"
//Animations
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/fade'

const Calcul = () => {
  const pageTransition = fadeIn()

  //inputs states
  const [LF, setLF] = useState(1000)
  const [D, setD] = useState(200)
  const [Cd, setCd] = useState(50)
  const [brl, setbrl] = useState(2)
  const [lf, setlf] = useState(20)
  const [tp, settp] = useState(4)
  const [nbpx, setnbpx] = useState(1920)
  const [nbpy, setnbpy]= useState(1080)

  return <motion.div variants={pageTransition} animate="visible" initial="hidden" exit="exit" className="calcul-container">
    <div className="calcul-write">
      <h1>Calculs</h1>
      <div className="input-container">
        <label htmlFor="LF">Longueur focale du télescope:</label><br/>
        <input id="LF" type="number" onChange={(e) => setLF(e.target.value)} value={LF}/>
      </div>
      <div className="input-container">
        <label htmlFor="LF">Diamètre du télescope:</label><br/>
        <input id="D" type="number" onChange={(e) => setD(e.target.value)} value={D}/>
      </div>
      <div className="input-container">
        <label htmlFor="LF">Champ apparent de l'oculaire en degrés:</label><br/>
        <input id="Cd" type="number" onChange={(e) => setCd(e.target.value)} value={Cd}/>
      </div>
      <div className="input-container">
        <label htmlFor="LF">Longueur focale de l'oculaire</label><br/>
        <input id="brl" type="number" onChange={(e) => setbrl(e.target.value)} value={brl}/>
      </div>
      <div className="input-container">
        <label htmlFor="LF">Multiplicateur de la barlow(1 si pas de barlow):</label><br/>
        <input id="lf" type="number" onChange={(e) => setlf(e.target.value)} value={lf}/>
      </div>
      <div className="input-container">
        <label htmlFor="LF">Taille des pixels en microns:</label><br/>
        <input id="tp" type="number" onChange={(e) => settp(e.target.value)} value={tp}/>
      </div>
      <div className="input-container">
        <label htmlFor="LF">Nombres de pixels sur l'axe x:</label><br/>
        <input id="nbpx" type="number" onChange={(e) => setnbpx(e.target.value)} value={nbpx}/>
      </div>
      <div className="input-container">
        <label htmlFor="LF">Nombres de pixels sur l'axe y:</label><br/>
        <input id="nbpy" type="number" onChange={(e) => setnbpy(e.target.value)} value={nbpy}/>
      </div>
    </div>
    <div className="calcul-read">
      <h1>Résultats</h1>
      <div className="input-container">
        <label htmlFor="">Rapport F/D:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(LF/D*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Pouvoir séparateur du télescope en secondes d'arc:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(120/D*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Magnitude visuelle limite du télescope:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round((5*Math.log10(D)+2.1)*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Champ de vision en minutes d'arc de l'oculaire:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(Cd/(LF/lf)*60*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Grossissement à l'oculaire:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(LF/lf*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Grossissement max théorique (Grossissement généralement impossible à utiliser):</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(D*2.4*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Grossissement utile:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(D*10)/10 + " à " + Math.round(D*2*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Grossissement minimum:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(D/7*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Taille de la pupille de sortie:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(D/(LF/lf)*10)/10}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Échantillonnage:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(206*tp/LF*100)/100}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Échantillonnage optimal en planétaire (en secondes d'arc):</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(0.206*550/(2*D)*100)/100}/>
      </div>
      <div className="input-container">
        <label htmlFor="">Échantillonnage optimal en ciel profond:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value="Échantillonnage optimal en ciel profond:"/>
      </div>
      <div className="input-container">
        <label htmlFor="">Champ de vision couvert par la caméra en minutes d'arc:</label><br/>
        <input onChange={() => {}} readOnly="" type="text" value={Math.round(2*Math.atan((nbpx*tp/1000)/(2*LF))*(180/Math.PI)*60*10)/10 + " par " + Math.round(2*Math.atan((nbpy*tp/1000)/(2*LF))*(180/Math.PI)*60*10)/10}/>
      </div>
    </div>
  </motion.div>
}

export default Calcul