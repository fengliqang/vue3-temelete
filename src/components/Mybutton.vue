<template>
  <div @click="handleClick">2222</div>
</template>
<script setup>
import { useAttrs, ref } from 'vue'
const arrts = useAttrs()

const iscC = ref(false)
defineOptions({
  inheritAttrs: false
})

const handleClick = async () => {
  console.log(iscC.value)
  if (iscC.value) {
    console.log('禁止嗲你')
    return
  }
  iscC.value = true
  console.log(iscC.value)
  try {
    await arrts.onClick()
  } finally {
    iscC.value = false
  }
}

console.log('%c [  ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', arrts)
</script>
