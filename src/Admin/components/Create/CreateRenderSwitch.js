import CreateCategorie from "./CreateCategorie";
import CreateImage from "./CreateImage";
import CreateInfobox from "./CreateInfobox";
import CreateMateriel from "./CreateMateriel";

const CreateRenderSwitch = ({section}) => {
  switch (section) {
    case 'images':
      return <CreateImage section={section}/>
    case 'categories':
      return <CreateCategorie section={section}/>
    case 'infobox':
      return <CreateInfobox section={section}/>
    case 'materiel':
      return <CreateMateriel section={section}/>
  
    default:
      return <p>404 Error</p>
  }
}

export default CreateRenderSwitch;