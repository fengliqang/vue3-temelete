// import request from '@/axios'

// export const getMenuListApi = () => {
//   return request.get({ url: '/mock/menu/list' })
// }

import http from '../../service/request'
import type { LoginResponse, UserListResponse, LoginApi } from './types'

export const GetUser = () => {
  return http<UserListResponse>({
    url: '/api/user/list',
    method: 'get'
  })
}

export const Login = (data: LoginApi) => {
  return http<LoginResponse>({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
