import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'
export function add(params) {
  console.log(params, '111')
  return Axios.post('/leftNavs', params)
}
