import axios from 'axios'

import type {
  RequestConfig,
  InternalRequestConfig,
  AxiosResponse,
  AxiosError,
  ApiResponse
} from './types/index'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})

const getControllerKey = (config: RequestConfig | InternalRequestConfig) => {
  let key = `${config.method}${config.url}${JSON.stringify(config.params)}${JSON.stringify(config.data)}`
  if (config.cancelKey) {
    key = config.cancelKey
  }
  return key
}

const abortControllerMap: Map<string, AbortController> = new Map()

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  const requestConfig = config as InternalRequestConfig
  const key = getControllerKey(requestConfig)

  if (abortControllerMap.has(key) && requestConfig.cancelKey) {
    abortControllerMap.get(key)?.abort()
    abortControllerMap.delete(key)
  } else if (abortControllerMap.has(key)) {
    return Promise.reject(new axios.CanceledError('Duplicate request blocked'))
  }

  const controller = new AbortController()
  requestConfig.signal = controller.signal
  abortControllerMap.set(key, controller)

  // Read token from local storage or state.
  const token = ''
  if (token) {
    requestConfig.headers.Authorization = token
  }

  return requestConfig
})

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const key = getControllerKey(response.config as InternalRequestConfig)
    if (abortControllerMap.has(key)) {
      abortControllerMap.delete(key)
    }

    const res = response.data as ApiResponse
    if (res.code === 200) {
      return res as unknown as AxiosResponse<ApiResponse>
    }

    return Promise.reject(res)
  },
  (error: AxiosError) => {
    const requestConfig = error.config
    if (!axios.isCancel(error) && requestConfig) {
      const key = getControllerKey(requestConfig as InternalRequestConfig)

      if (abortControllerMap.has(key)) {
        abortControllerMap.delete(key)
      }
    }

    return Promise.reject(error)
  }
)

const http = <T = unknown, D = unknown>(config: RequestConfig<D>) => {
  return axiosInstance.request<ApiResponse<T>, ApiResponse<T>, D>(config)
}

export default http
