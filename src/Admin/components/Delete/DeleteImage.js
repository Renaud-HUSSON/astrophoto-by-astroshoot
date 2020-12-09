import { Link } from "react-router-dom"
import useFetchData from "../../../components/shared/Hooks/useFetchData"
import Loading from "../../../components/shared/Loading"
import SubmitDeleteButton from '../../../components/shared/Forms/SubmitDeleteButton'

const DeleteImage = ({section, id}) => {
  
  const data = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read_single.php?id=${id}`)
  const imageData = !data[1] ? data[0].data[0] : ''

  return !data[1]
  ?<> 
    <div className="delete-form">
      <p className="delete">Vouez vous vraiment supprimer l'image suivante?</p>
      <p>{imageData.titre}</p>
      <img src={`https://astrophoto-amateur.fr/${imageData.src}`} alt={imageData.titre}/>
      <div className="action-buttons">
        <Link to={`/admin/${section}`}><button className="cancel-delete">Annuler</button></Link>
        <SubmitDeleteButton section={image.categorie} id={id}/>
      </div>
    </div>
  </>
  : <Loading />
}

export default DeleteImage