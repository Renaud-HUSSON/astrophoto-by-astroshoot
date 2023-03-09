import useFetchData from "../Hooks/useFetchData"
import Loading from "../Loading"

const SelectInput = ({label, value, name, section, optionValue, optionTitle, fichier="read", condition="", onChange=""}) => {
  const sectionData = useFetchData(`${process.env.REACT_APP_URL}api/${section}/${fichier}.php${condition}`)
  const data = !sectionData[1] ? sectionData[0].data : ''
  
  const current = !sectionData[1] 
    ? data.indexOf(data.filter((item) => {
      return item[optionValue] === value
    })[0])
    : 0

  return !sectionData[1] 
    ?<div className="input select-input">
    <label htmlFor={name}>{label}</label><br/>
    <select id={name} name={name} onChange={onChange}>
      {current !== -1 ? <option value={data[current][optionValue]}>{data[current][optionTitle]}</option> : ''}
      <option value="">Aucune</option>
      {
        data.map(item => {
          return item.nom !== value  
          ? <option key={item.id} value={item[optionValue]}>{item[optionTitle]}</option>
          : ''
        })
      }
    </select>
  </div>
  : <Loading />
}

export default SelectInput