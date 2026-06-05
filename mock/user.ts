export default [
  {
    url: '/api/user/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: [
            {
              id: 1,
              name: '张三',
              age: 18,
              status: 1
            },
            {
              id: 2,
              name: '李四',
              age: 20,
              status: 0
            }
          ],
          total: 2
        }
      }
    }
  }
]