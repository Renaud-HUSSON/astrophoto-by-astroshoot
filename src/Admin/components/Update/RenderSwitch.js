import UpdateCategorie from "./UpdateCategorie";
import UpdateImage from "./UpdateImage";
import UpdateInfobox from "./UpdateInfobox";

const RenderSwitch = ({section, id}) => {
  switch (section) {
    case 'images':
      return <UpdateImage section={section} id={id}/>
    case 'categories':
      return <UpdateCategorie section={section} id={id}/>
    case 'infobox':
      return <UpdateInfobox section={section} id={id}/>
    case 'materiel':
      return <UpdateInfobox section={section} id={id}/>

    default:
      return <p>404 ERROR</p>
  }
}

export default RenderSwitch