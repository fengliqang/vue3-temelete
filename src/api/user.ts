// import request from '@/axios'

// export const getMenuListApi = () => {
//   return request.get({ url: '/mock/menu/list' })
// }

import http from "../service/request";

export const getUser=()=>{
    return http.get('/api/user/list',{})
}