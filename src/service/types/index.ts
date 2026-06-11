import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse
} from 'axios'

interface RequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  cancelKey?: string
}

interface InternalRequestConfig<D = unknown> extends InternalAxiosRequestConfig<D> {
  cancelKey?: string
}

interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}
export type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  RequestConfig,
  InternalRequestConfig,
  ApiResponse
}
