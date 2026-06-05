<template>
  <div>444</div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store'
const userStore = useUserStore()

console.log('%c [  ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', userStore.token)
</script>

<style></style>
