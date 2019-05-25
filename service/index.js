import axios from 'axios'
// import { Message } from 'element-ui'
// import qs from 'qs'
import config from './config'

const IS_DEV = process.env.NODE_ENV !== 'production'
// console.log('is dev', IS_DEV) // todo 上线修改域名等

if (process.server) {
  // 服务端请求，即在asycData中发起的请求 // The server-side needs a full url to works
  // config.baseURL = 'http://127.0.0.1:8000'
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8000}`
}

const service = axios.create(config)

// POST 传参序列化
service.interceptors.request.use(
  (config) => {
    // if (config.method === 'post') config.data = qs.stringify(config.data)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
