const SimpleForm = ({children, className}) => {
  const handleSubmit = (e) => {
    e.preventDefaul();
  } 
  
  return <form className={`form ${className}`} onSubmit={handleSubmit}>
    {children}
  </form>
}

export default SimpleForm