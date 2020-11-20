//Custom Hook to fetch data from an URL
import useFetchData from '../shared/Hooks/useFetchData'
import Loading from '../shared/Loading'

const ImageInfobox = ({nom, image}) => {
  const data = useFetchData(`http://localhost/astroshoot/api/infobox/read_single.php?nom=${nom}`)
  const keys = !data[1]? Array.from(Object.keys(data[0].data[0])).slice(2) : '';

  return !data[1]
  ? <table>
    <thead>
      <tr>
        <th colSpan="2">{data[0].data[0].nom}</th>
      </tr>
      <tr>
        <th colSpan="2">{image}</th>
      </tr>
    </thead>
    <tbody>
      {
        keys.map((key, i) => {
          return <tr key={i}>
            <td>{key}</td>
            <td>{data[0].data[0][key]}</td>
          </tr>
        })
      }
    </tbody>
  </table>
  : <Loading />
}

export default ImageInfobox