import { Link } from "react-router-dom"

const AdminNav = () => {
  return <ul>
    <Link to="/admin/images"><li>IMAGES</li></Link>
    <Link to="/admin/categories"><li>CATEGORIES</li></Link>
    <Link to="/admin/infobox"><li>INFOBOX</li></Link>
    <Link to="/admin/materiel"><li>MATERIEL</li></Link>
  </ul>
}

export default AdminNav