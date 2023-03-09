import { useParams } from "react-router-dom"
import SimpleForm from "../../components/shared/Forms/SimpleForm"
import UpdateRenderSwitch from '../components/Update/UpdateRenderSwitch'

const Update = () => {
  const params = useParams()
  const {section, id} = params;

  return <div className="update">
    <h1>{section.toUpperCase()}</h1>
    <SimpleForm>
      <UpdateRenderSwitch section={section} id={id}/>
    </SimpleForm>
  </div>
}

export default Update