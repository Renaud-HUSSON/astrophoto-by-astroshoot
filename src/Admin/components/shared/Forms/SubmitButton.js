import { useState } from "react"

const SubmitButton = ({data, section}) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async (e) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData()
    
    for(let i in data){
      form.append(i, data[i])
    }

    const update = await fetch(`http://localhost/astroshoot/api/${section}/update.php`, {
      method: 'POST',
      body: form
    })

    const json = await update.json()
    setLoading(false)
    console.log(json)
  }

  return <button onClick={handleClick}>{!loading ? 'Valider' : 'Chargement'}</button>
}

export default SubmitButton