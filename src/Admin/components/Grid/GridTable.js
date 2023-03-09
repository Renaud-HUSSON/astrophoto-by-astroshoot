import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const GridTable = ({data, section}) => {
  const modifyTable = ['newsletter', 'logs']
  const deleteTable = ['logs']

  const modifyBoolean = modifyTable.includes(section) ? false : true
  const deleteBoolean = deleteTable.includes(section) ? false : true

  return <table>
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
              {
                modifyBoolean
                ?<td>
                  <Link to={`/admin/${section}/update/${row.id}`}><FontAwesomeIcon className='update' icon={faPen} /></Link>
                </td>
                : <></>
              }
              {
                deleteBoolean
                ?<td>
                  <Link to={`/admin/${section}/delete/${row.id}`}><FontAwesomeIcon className='delete' icon={faTrashAlt} /></Link>
                </td>
                :<></>
              }
            </tr>
          ))
        }
    </tbody>
  </table>
}

export default GridTable