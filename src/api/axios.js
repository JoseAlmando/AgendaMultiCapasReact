import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://www.raydelto.org/agenda.php',
  headers: {
    'Content-Type': 'application/json',
  },
  
})

export default instance
