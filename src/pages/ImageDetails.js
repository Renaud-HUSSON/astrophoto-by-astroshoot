//Components
import {Modal, CloseModal} from '../components/shared/Modal'
// import { useParams } from "react-router-dom"
import image from '../images/nebuleuses/NGC6992-30-05-2020.jpg'
//animation
import {motion} from "framer-motion"
import {fadeIn} from '../animations/fade'
import { useState } from 'react'

const ImageDetails = () => {
  // const imageid = useParams().id
  const pageAnimation = fadeIn()
  const [modalOpened, setModalOpened] = useState(false)

  const cancelClick = (e) => {
    e.stopPropagation()
  }

  const openModal = () => {
    setModalOpened(true)
  }

  return <motion.div variants={pageAnimation} animate="visible" initial="hidden" exit="exit" className="image-details">
    <h1>Titre de l'image</h1>
    <div className="image-container">
      <div className="image">
        <img onClick={openModal} src={image} alt="nébuleuse"/>
        <button onClick={openModal} className="open-modal">Afficher l'image en grand</button>
      </div>
      <div className="image-informations-container">
        <h1>Informations</h1>
        <p className="image-informations">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, a soluta at aut voluptatum ab molestiae iste quisquam nobis illo et repellat, ducimus nulla voluptates provident debitis. Debitis, fugiat veniam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quod enim. Est fuga quod deleniti aperiam quisquam? Aliquam tempore voluptatem voluptates autem placeat, rem labore alias aut? Consequatur, dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis, beatae qui consequuntur architecto expedita quae aperiam ipsam nobis mollitia odio molestias in eius odit nihil ex id praesentium totam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis, beatae qui consequuntur architecto expedita quae aperiam ipsam nobis mollitia odio molestias in eius odit nihil ex id praesentium totam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis, beatae qui consequuntur architecto expedita quae aperiam ipsam nobis mollitia odio molestias in eius odit nihil ex id praesentium totam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis, beatae qui consequuntur architecto expedita quae aperiam ipsam nobis mollitia odio molestias in eius odit nihil ex id praesentium totam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis, beatae qui consequuntur architecto expedita quae aperiam ipsam nobis mollitia odio molestias in eius odit nihil ex id praesentium totam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis, beatae qui consequuntur architecto expedita quae aperiam ipsam nobis mollitia odio molestias in eius odit nihil ex id praesentium totam.
        </p>
      </div>
    </div>
    <div className="image-details-container">
      <h1>Détails</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, a soluta at aut voluptatum ab molestiae iste quisquam nobis illo et repellat, ducimus nulla voluptates provident debitis. Debitis, fugiat veniam?
      </p>
    </div>
    <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
      <img onClick={cancelClick} src={image} alt="Nébuleuse"/>
      <CloseModal setModalOpened={setModalOpened}>X</CloseModal>
    </Modal>
  </motion.div>
}

export default ImageDetails