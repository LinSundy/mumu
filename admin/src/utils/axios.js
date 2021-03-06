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

export function GET(url) {
  service.get(url)
}

export function POST(url, data) {
  console.log(url, data)
  console.log(service.post(url, data), '11111')
  return service.post(url, data)
}
