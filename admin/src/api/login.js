import request from '@/utils/request'
import {POST} from '@/utils/axios'

export function login(username, password) {
  return POST('/user/login', {username, password})
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
