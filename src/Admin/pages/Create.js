import { useParams } from "react-router-dom"
import CreateRenderSwitch from "../components/Create/CreateRenderSwitch"
import SimpleForm from "../../components/shared/Forms/SimpleForm"

const Create = () => {
  const section = useParams().section
  
  return <div className="create">
    <h1>{section.toUpperCase()}</h1>
    <SimpleForm>
      <CreateRenderSwitch section={section}/>
    </SimpleForm>
  </div>
}

export default Create