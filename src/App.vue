<template>
  <Header />
  <router-view/>
</template>

<style>
  body {  
    margin: 0;
    padding: 0;
    color: #fff;  
    background: linear-gradient(to right, #ED213A, #93291E);
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }       
  }
</script>
