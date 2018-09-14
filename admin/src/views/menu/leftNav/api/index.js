import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'
export function add(params) {
  return Axios.post('/leftNav', params)
}
