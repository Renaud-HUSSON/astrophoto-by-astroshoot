//Components
import {Modal, CloseModal} from '../components/shared/Modal'
import Loading from '../components/shared/Loading'
import ImageInfobox from '../components/ImageDetails/ImageInfobox'
//animation
import {motion} from "framer-motion"
import {fadeIn} from '../animations/fade'
import { useState } from 'react'
//Custom Hook to fetch data from an URL
import useFetchData from '../components/shared/Hooks/useFetchData'
import { useParams } from "react-router-dom"
//React Helmet
import { Helmet } from 'react-helmet-async'

const ImageDetails = () => {
  const params = useParams()

  const imageData = useFetchData(`${process.env.REACT_APP_URL}/api/images/read_single.php?id=${params.id}`)

  const pageAnimation = fadeIn()
  const [modalOpened, setModalOpened] = useState(false)

  const cancelClick = (e) => {
    e.stopPropagation()   
  }

  const openModal = () => {
    setModalOpened(true)
  }

  const image = !imageData[1] ? imageData[0].data[0]: ''

  return !imageData[1] 
  ? <motion.div variants={pageAnimation} animate="visible" initial="hidden" exit="exit" className="image-details">
    <Helmet>
      <title>{image.titre}</title>
      <meta name="description" content={`Détails de ma photo suivante: ${image.titre}`}/>
    </Helmet>
    <h1>{image.titre}</h1>
    <div className="image-container">
      <div className="image">
        {
          image.src.match(/[.]mp4/)
          ? <video controls autoPlay src={`https://astrophoto-amateur.fr/${image.src}`} type="video/mp4"></video>
          :<img onClick={openModal} src={`https://astrophoto-amateur.fr/${image.src}`} alt={image.titre}/>
        }
        <button onClick={openModal} className="open-modal">Afficher l'image en grand</button>
      </div>
      <div className="image-informations-container">
        <h1>Informations</h1>
        <div className="image-informations">
          {
            image.infobox !== "" 
            ? <ImageInfobox nom={image.infobox} image={image.titre} />
          : <p>{image.description}</p>
          }
        </div>
      </div>
    </div>
    <div className="image-details-container">
      <h1>Détails</h1>
      <pre>
        {image.details}
      </pre>
    </div>
    <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
      { image.src.match(/[.]mp4/)
        ? <video controls autoPlay src={`https://astrophoto-amateur.fr/${image.src}`} type="video/mp4"></video>
        :<img onClick={cancelClick} src={`https://astrophoto-amateur.fr/${image.src}`} alt="Nébuleuse"/>
      }
      <CloseModal setModalOpened={setModalOpened}>X</CloseModal>
    </Modal>
  </motion.div>
  : <Loading />
}

export default ImageDetails