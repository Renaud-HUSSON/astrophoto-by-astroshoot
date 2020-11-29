import { Link } from "react-router-dom"
import useFetchData from "../../../components/shared/Hooks/useFetchData"
import Loading from "../../../components/shared/Loading"
import SubmitDeleteButton from "../../../components/shared/Forms/SubmitDeleteButton"

const DeleteCategorie = ({section, id}) => {
  const categorieData = useFetchData(`http://localhost/astroshoot/api/${section}/read_single.php?id=${id}`)
  const categorie = !categorieData[1] ? categorieData[0].data[0] : ''

  return !categorieData[1]
  ?<> 
    <div className="delete-form">
      <p className="delete">Vouez vous vraiment supprimer la catégorie suivante?</p>
      <p>{categorie.titre}</p>
      <div className="action-buttons">
        <Link to={`/admin/${section}`}><button className="cancel-delete">Annuler</button></Link>
        <SubmitDeleteButton section={section} id={id}/>
      </div>
    </div>
  </>
  : <Loading />
}

export default DeleteCategorie