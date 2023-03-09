import { useParams } from "react-router-dom"
import DeleteRenderSwitch from "../components/Delete/DeleteRenderSwitch"
import SimpleForm from "../../components/shared/Forms/SimpleForm"

const Delete = () => {
  const params = useParams()
  const section = params.section
  const id = params.id
  
  return <div className="create">
    <h1>{section.toUpperCase()}</h1>
    <SimpleForm>
      <DeleteRenderSwitch section={section} id={id}/>
    </SimpleForm>
  </div>
}

export default Delete