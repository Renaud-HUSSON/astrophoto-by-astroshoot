import useFetchData from '../../components/shared/Hooks/useFetchData'
import Loading from '../../components/shared/Loading'
import { Link, useParams } from 'react-router-dom'
import datas from '../data'
import GridTable from './Grid/GridTable'

const Grid = () => {
  const section = useParams().section

  const apiURL = datas[section].url
  
  const url = `http://localhost/astroshoot/api/${apiURL}/read.php`

  const apiDatas = useFetchData(url)
  const data = apiDatas[0].data;

  return !apiDatas[1] 
  ? <div>
      <h1>{section.toUpperCase()}</h1>
      <div className="create-button-container">
        <Link to={`/admin/${section}/create`} className="create-button">Créer</Link>
      </div>
      <GridTable data={data} section={section}/>
  </div>
  : <Loading />
}

export default Grid