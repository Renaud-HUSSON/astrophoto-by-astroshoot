import useFetchData from '../../components/shared/Hooks/useFetchData'
import Loading from '../../components/shared/Loading'
import { Link, useParams } from 'react-router-dom'
import GridTable from './Grid/GridTable'

const Grid = () => {
  const section = useParams().section
  
  const url = `${process.env.REACT_APP_URL}api/${section}/read.php`

  const apiDatas = useFetchData(url)

  const data = !apiDatas[1] ? apiDatas[0].data : ''

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