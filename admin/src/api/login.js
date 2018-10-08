import request from '@/utils/request'
import {GET, POST} from '@/utils/axios'

export function login(username, password) {
  return POST('/user/login', {username, password})
}

export function getInfo(username) {
  return GET(`/user/info/${username}`)
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
