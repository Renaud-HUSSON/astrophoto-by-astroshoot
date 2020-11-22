import useFetchData from '../../components/shared/Hooks/useFetchData'
import Loading from '../../components/shared/Loading'

const Grid = ({datas}) => {
  const api = datas.apiURL
  const url = `http://localhost/astroshoot/api/${api}/read.php`

  const apiDatas = useFetchData(url)
  const data = apiDatas[0].data;

  return !apiDatas[1] 
  ? <table>
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
            </tr>
          ))
        }
    </tbody>
  </table>
  : <Loading />
}

export default Grid