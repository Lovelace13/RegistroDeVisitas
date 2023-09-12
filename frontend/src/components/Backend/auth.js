import axios from 'axios'

const API = process.env.BACKENDAPP_API;

const registerRequest = (user) => axios.post(`${API}/users/`)

export default registerRequest;