/**
 * Created by chelin on 2018/9/26
 */
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.LOCAL_API, // 本地api 的 base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true
})

export function POST(url, data) {
  return service.post(url, data)
}

export function GET(url, data) {
  console.log(service.get(url, {params: data}), '1')
  console.log(url, data, 'axios --axios.js')
  return service.get(url, {params: data})
}
