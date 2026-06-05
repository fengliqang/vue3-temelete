import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})

//请求拦截器
service.interceptors.request.use(config => {
  //从本地拿取
  const token = ''
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

//响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code === 200) {
    return response.data
  } else {
    return Promise.reject(res)
  }
})

const http = {
  get(url: string, params: object, config = {}) {
    return service.get(url, {
      ...config,
      params
    })
  },
  post(url: string, data: object, config = {}) {
    return service.post(url, data, config)
  },
  put(url: string, data: object, config = {}) {
    return service.put(url, data, config)
  },
  delete(url: string, data: object, config = {}) {
    return service.delete(url, {
      ...config,
      data
    })
  }
}
export default http
