<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css' 


onMounted(() => {
  AOS.init({
    duration: 800, //ms
    offset: 100,   // how many pixels I have to scroll for this to appear
    once: true,   // true = happens once : false = happens every time I scroll
  })
})
</script>

<template>
  <router-view></router-view> 
</template>