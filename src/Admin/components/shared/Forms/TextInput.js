import { useEffect, useRef } from "react";

const TextInput = ({label, value, disabled = false, multiline = false}) => {
  const area = useRef(null)
  
  useEffect(() => {
    if(area.current != null){
      area.current.style.height = '1px'
      area.current.style.height = 25 + area.current.scrollHeight + 'px'
    }
  }, [area])
  
  return <div className="input text-input">
    <label htmlFor={label}>{label}</label><br/>
     {multiline 
     ?<textarea ref={area} id={label} defaultValue={value} disabled={disabled ? true : false} />
     :<input type="text" id={label} defaultValue={value} disabled={disabled ? true : false} />
    }
  </div>
}

export default TextInput