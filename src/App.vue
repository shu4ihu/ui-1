<script setup>
import { ref, provide } from 'vue';
import { router } from './router';

const pageWidth = document.documentElement.clientWidth
const asideVisible = ref(pageWidth <= 500 ? false : true)
provide('asideVisible',asideVisible)
router.afterEach(()=>{
  if(pageWidth <= 500){
    asideVisible.value = false
  }
})
</script>

<template>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
