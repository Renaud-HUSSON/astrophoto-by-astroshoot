import TextInput from '../shared/Forms/TextInput'
import SelecInput from '../shared/Forms/SelectInput'
import useFetchData from '../../../components/shared/Hooks/useFetchData'
import Loading from '../../../components/shared/Loading'
import SelectInput from '../shared/Forms/SelectInput'

const UpdateImage = ({section, id}) => {
  const imageData = useFetchData(`http://localhost/astroshoot/api/${section}/read_single.php?id=${id}`)
  const image = !imageData[1] ? imageData[0].data[0] : ''

  return !imageData[1] 
  ?<>
    <TextInput label='id' name="id" value={image.id} disabled/>
    <TextInput label='Titre' name="titre" value={image.titre} />
    <SelectInput label='Catégorie' name="categorie" value={image.categorie} section="categories" optionValue="nom" optionTitle="titre"/>
    <TextInput label='src' name="" value={image.src} disabled/>
    <SelectInput label='Infobox' name="infobox" value={image.infobox} section="infobox" optionValue="nom" optionTitle="nom"/>
    <TextInput label='details' name="" value={image.details} multiline/>
    <TextInput label='description' name="" value={image.description} multiline/>
  </>
  : <Loading />
}

export default UpdateImage