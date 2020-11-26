import useFetchData from '../../components/shared/Hooks/useFetchData'
import Loading from '../../components/shared/Loading'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import datas from '../data'

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
      <table>
        <thead>
          <tr>
            {
              Object.keys(data[0]).map(field => (
                field !== 'description' && field !== 'details' && <td key={field}>{field}</td> 
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, i) => (
              <tr key={i}>
                {
                  Object.keys(row).map((element, i) => {
                    return element !== 'description' && element !== 'details'
                    && <td key={i}>{row[element]}</td>
                  })
                }
                <td>
                  <Link to={`/admin/${section}/update/${row.id}`}><FontAwesomeIcon className='update' icon={faPen} /></Link>
                </td>
                <td>
                  <Link to={`/admin/${section}`}><FontAwesomeIcon className='delete' icon={faTrashAlt} /></Link>
                </td>
              </tr>
            ))
          }
      </tbody>
    </table>
  </div>
  : <Loading />
}

export default Grid