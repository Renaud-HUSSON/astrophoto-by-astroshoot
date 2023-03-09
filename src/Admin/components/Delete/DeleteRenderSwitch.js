import useFetchData from "../../../components/shared/Hooks/useFetchData";
import Loading from "../../../components/shared/Loading";
import DeleteCarousel from "./DeleteCarousel";
import DeleteCategorie from "./DeleteCategorie";
import DeleteImage from "./DeleteImage";
import DeleteInfobox from "./DeleteInfobox";
import DeleteMateriel from "./DeleteMateriel";
import DeleteNewsletter from "./DeleteNewsletter";

const DeleteRenderSwitch = ({section ,id}) => {
  //Getting all infoboxes to get the one with the matching id and passing it down to DeleteInfobox
  const infoboxData = useFetchData(`${process.env.REACT_APP_URL}/api/${section}/read.php`)
  const infobox = !infoboxData[1] 
  ? infoboxData[0].data.filter(infobox => infobox.id === id)[0]
  : ''

  switch (section) {
    case 'images':
      return <DeleteImage section={section} id={id}/>
    case 'categories':
      return <DeleteCategorie section={section} id={id}/>
    case 'infobox':
      return !infoboxData[1] ? <DeleteInfobox section={section} id={id} nom={infobox.nom}/> : <Loading />
    case 'materiel':
      return <DeleteMateriel section={section} id={id}/>
    case 'carousel_images':
      return <DeleteCarousel section={section} id={id}/>
    case 'newsletter':
      return <DeleteNewsletter section={section} id={id}/>
  
    default:
      return <p>404 Error</p>
  }
}

export default DeleteRenderSwitch;