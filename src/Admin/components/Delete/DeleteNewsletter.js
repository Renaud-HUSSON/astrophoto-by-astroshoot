import { Link } from "react-router-dom"
import useFetchData from "../../../components/shared/Hooks/useFetchData"
import Loading from "../../../components/shared/Loading"
import SubmitDeleteButton from "../../../components/shared/Forms/SubmitDeleteButton"

const DeleteNewsletter = ({section, id}) => {
  const newsletterData = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read_single.php?id=${id}`)
  const newsletter = !newsletterData[1] ? newsletterData[0].data[0] : ''

  return !newsletterData[1]
  ?<> 
    <div className="delete-form">
      <p className="delete">Vouez vous vraiment supprimer l'email suivant de la newsletter?</p>
      <p>{newsletter.email}</p>
      <div className="action-buttons">
        <Link to={`/admin/${section}`}><button className="cancel-delete">Annuler</button></Link>
        <SubmitDeleteButton d={id}/>
      </div>
    </div>
  </>
  : <Loading />
}

export default DeleteNewsletter