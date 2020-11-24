import { useEffect, useRef } from "react";

const TextInput = ({label, value, name, disabled = false, multiline = false, onChange=''}) => {
  const area = useRef(null)
  
  useEffect(() => {
    if(area.current != null){
      area.current.style.height = '1px'
      area.current.style.height = 25 + area.current.scrollHeight + 'px'
    }
  }, [area])
  
  return <div className="input text-input">
    <label htmlFor={name}>{label}</label><br/>
     {multiline 
     ?<textarea onChange={onChange} ref={area} id={name} name={name} defaultValue={value} disabled={disabled ? true : false} />
     :<input onChange={onChange} type="text" id={name} name={name} defaultValue={value} disabled={disabled ? true : false} />
    }
  </div>
}

export default TextInput