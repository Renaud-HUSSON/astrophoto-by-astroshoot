import { useCallback, useState } from 'react'
import Grid from './components/Grid'

const Admin = () => {
  const [section, setSection] = useState('IMAGES')

  const datas = {
    IMAGES: {
      apiURL: 'images',
    },
    CATEGORIES: {
      apiURL: 'category',
    },
    INFOBOX: {
      apiURL: 'infobox',
    },
    MATERIEL: {
      apiURL: 'materiel',
    }
  }

  const handleClick = useCallback((e) => {
    setSection(e.target.textContent)
  }, [])

  return <div className="Admin">
    <div className="admin-nav">
      <h1>Admin</h1>
      <ul>
        <li onClick={handleClick}>IMAGES</li>
        <li onClick={handleClick}>CATEGORIES</li>
        <li onClick={handleClick}>INFOBOX</li>
        <li onClick={handleClick}>MATERIEL</li>
      </ul>
    </div>
    <div className="datas">
      <h1>{section}</h1>
      <Grid datas={datas[section]}/>
    </div>
  </div>
}

export default Admin