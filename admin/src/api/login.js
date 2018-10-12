// import request from '@/utils/request'
import {GET, POST} from '@/utils/axios'

export function login(username, password) {
  return POST('/user/login', {username, password})
}

export function getInfo() {
  return GET(`/user/info`)
}

export function logout() {
  return GET(`/user/logout`)
}
