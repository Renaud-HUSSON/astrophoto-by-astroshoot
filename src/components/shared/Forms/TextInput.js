import { useEffect, useRef } from "react";

const TextInput = ({label, value, name, disabled = false, multiline = false, onChange='', type='text'}) => {
  const area = useRef(null)
  
  const textareaResize = (textarea) => {
    if(textarea.current != null){
      textarea.current.style.height = '1px'
      textarea.current.style.height = 25 + textarea.current.scrollHeight + 'px'
    }
  }

  useEffect(() => {
    textareaResize(area)
  }, [area])
  
  const handleTextareaChange = (e) => {
    onChange(e);
    textareaResize(area)
  }

  return <div className="input text-input">
    <label htmlFor={name}>{label}</label><br/>
     {multiline 
     ?<textarea onChange={handleTextareaChange} ref={area} id={name} name={name} defaultValue={value} disabled={disabled ? true : false} />
     :<input onChange={onChange} type={type} id={name} name={name} defaultValue={value} disabled={disabled ? true : false} />
    }
  </div>
}

export default TextInput