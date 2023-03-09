import CreateCarousel from "./CreateCarousel";
import CreateCategorie from "./CreateCategorie";
import CreateImage from "./CreateImage";
import CreateInfobox from "./CreateInfobox";
import CreateMateriel from "./CreateMateriel";
import CreateNewsletter from "./CreateNewsletter";

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
    case 'carousel_images':
      return <CreateCarousel section={section}/>
    case 'newsletter':
      return <CreateNewsletter section={section}/>
  
    default:
      return <p>404 Error</p>
  }
}

export default CreateRenderSwitch;