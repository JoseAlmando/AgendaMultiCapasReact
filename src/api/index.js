import axios from './axios'

export const getAlls = async () => {
  return await axios.get('/')
}

export const postContact = async (req) => {
  return await axios.post('', req)
}

export async function postData(data = {}) {
  const response = await fetch('https://www.raydelto.org/agenda.php', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(data),
  })
  return response.json()
}