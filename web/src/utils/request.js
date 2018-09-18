import axios from 'axios'

var baseURl = ''

if (!process.env.NODE_ENV === 'development') {
  baseURl = 'http://localhost:3000'
}

const service = axios.create({
  baseURL: baseURl,
  timeout: 5000
})

service.interceptors.request.use(config => {
  // add some param in header
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  })

// export default service

function checkStatus(response) {
  return response
}

const request = (config) => {
  return service.request(config).then(checkStatus)
}

export const GET = (url, data, config) => {
  const CONF = {
    url,
    method: 'get',
    params: data
  }
  return request({...CONF, ...config})
}

export const POST = (url, data, config) => {
  const CONF = {
    url,
    method: 'post',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    data
  }
  return request({...CONF, ...config})
}

export const PUT = (url, data, config) => {
  const CONF = {
    url,
    method: 'put',
    data
  }
  return request({...CONF, ...config})
}

export const DELETE = (url, data, config) => {
  const CONF = {
    url,
    method: 'delete',
    data
  }
  return request({...CONF, ...config})
}
