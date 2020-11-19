import { useEffect, useState } from "react"

const useFetchData = (url) => {
  const [state, setState] = useState({
    items: [],
    loading: true
  })

  useEffect(() => {
    (async () => {
      const data = await fetch(url)
      const json = await data.json()

      if(data.ok){
        setState({items: json, loading: false})
      }else{
        console.log('Error while fetching data')
      }
    })()
  }, [url])

  return [state.items, state.loading]
}

export default useFetchData