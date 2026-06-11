<template>
  <div>444</div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store'
const userStore = useUserStore()

import { GetUser, Login } from '@/api/user/user'

const aa = async () => {
  const res = await GetUser()

  console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', res.data)
}
aa()

const bb = async () => {
  const data = {
    code: 1,
    mobile: 166928225
  }
  const res = await Login(data)

  console.log('%c [  ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', res.data)
}
bb()
console.log('%c [  ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', userStore.token)
</script>

<style></style>
