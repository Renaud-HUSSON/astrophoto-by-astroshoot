import DeleteCategorie from "./DeleteCategorie";
import DeleteImage from "./DeleteImage";
import DeleteInfobox from "./DeleteInfobox";
import DeleteMateriel from "./DeleteMateriel";

const DeleteRenderSwitch = ({section ,id}) => {
  switch (section) {
    case 'images':
      return <DeleteImage section={section} id={id}/>
    case 'categories':
      return <DeleteCategorie section={section} id={id}/>
    case 'infobox':
      return <DeleteInfobox section={section} id={id}/>
    case 'materiel':
      return <DeleteMateriel section={section} id={id}/>
  
    default:
      return <p>404 Error</p>
  }
}

export default DeleteRenderSwitch;