import axios from "axios"
import { useEffect, useState } from "react"
import API_URL from '../configs/configApi'

const usePetitionGet = (endpoint) => {

  const [data, setData] = useState()
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)

    axios.get(`${API_URL}${endpoint}`)
    .then(data => {
      setData(data.data)
      setCargando(false)
    })
    .catch(e => {
      setCargando(false)
      console.error(e)
    })
  }, [])

  return [data, cargando]
}

export default usePetitionGet;
