const FileInput = ({label, name, onChange='', value=''}) => {
  return <div className="input file-input">
    <input onChange={onChange} type="file" name={name} id={name}/>
    <label htmlFor={name}>{label}</label>
    <p>{value}</p>
  </div>
}

export default FileInput