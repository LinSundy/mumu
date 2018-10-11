/**
 * Created by chelin on 2018/9/26
 */
import axios from 'axios';
import { Message } from 'element-ui';
import app from '../main';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.LOCAL_API, // 本地api 的 base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true
})

service.interceptors.response.use((res) => {
  console.log(res, '拦截了数据')
  if (res.data.status === 10000) {
    Message.error('用户未登录');
    app.$router.push('/login');
  } else {
    return res;
  }
})

export function POST(url, data) {
  return service.post(url, data)
}

export function GET(url, data) {
  return service.get(url, {params: data})
}
