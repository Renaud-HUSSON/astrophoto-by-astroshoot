const SimpleForm = ({children}) => {
  const handleSubmit = (e) => {
    e.preventDefaul();
  } 
  
  return <form className="admin-form" onSubmit={handleSubmit}>
    {children}
  </form>
}

export default SimpleForm