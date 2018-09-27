/**
 * Created by chelin on 2018/9/26
 */
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.LOCAL_API, // 本地api 的 base_url
  timeout: 5000 // 请求超时时间
})

export function GET(url) {
  service.get(url)
}

export function POST(url, data) {
  service.post(url, data)
}
