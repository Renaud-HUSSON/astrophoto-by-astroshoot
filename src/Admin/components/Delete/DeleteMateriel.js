import { Link } from "react-router-dom"
import useFetchData from "../../../components/shared/Hooks/useFetchData"
import Loading from "../../../components/shared/Loading"
import SubmitDeleteButton from "../../../components/shared/Forms/SubmitDeleteButton"

const DeleteMateriel = ({section, id}) => {
  const materielData = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read_single.php?id=${id}`)
  const materiel = !materielData[1] ? materielData[0].data[0] : ''

  return !materielData[1]
  ?<> 
    <div className="delete-form">
      <p className="delete">Vouez vous vraiment supprimer le matériel suivant?</p>
      <p>{materiel.label}</p>
      <div className="action-buttons">
        <Link to={`/admin/${section}`}><button className="cancel-delete">Annuler</button></Link>
        <SubmitDeleteButton section={section} id={id}/>
      </div>
    </div>
  </>
  : <Loading />
}

export default DeleteMateriel