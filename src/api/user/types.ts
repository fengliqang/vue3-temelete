export interface UserInfo {
  id?: number
  name?: string
  age?: number
  status?: number
}

export interface UserState {
  token: string
  userInfo: UserInfo | null
}

export interface UserListItem {
  id: number
  name: string
  age: number
  status: number
}

export interface UserListResponse {
  list: UserListItem[]
  total: number
}

export interface LoginApi {
  code: number
  mobile: number
}

export interface LoginResponse {
  token: string
}
