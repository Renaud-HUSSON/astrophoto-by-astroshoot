import { Link } from "react-router-dom"
import useFetchData from "../../../components/shared/Hooks/useFetchData"
import Loading from "../../../components/shared/Loading"
import SubmitDeleteButton from "../../../components/shared/Forms/SubmitDeleteButton"

const DeleteInfobox = ({section, id, nom}) => {
  
  //Get the single infobox
  const infoboxData = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read_single.php?nom=${nom}`)
  const infobox = !infoboxData[1] ? infoboxData[0].data[0] : ''

  return !infoboxData[1]
  ?<> 
    <div className="delete-form">
      <p className="delete">Vouez vous vraiment supprimer l'infobox suivante?</p>
      <p>{infobox.label}</p>
      <div className="action-buttons">
        <Link to={`/admin/${section}`}><button className="cancel-delete">Annuler</button></Link>
        <SubmitDeleteButton section={section} id={id}/>
      </div>
    </div>
  </>
  : <Loading />
}

export default DeleteInfobox