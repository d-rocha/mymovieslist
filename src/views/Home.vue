<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Movies titleMovie="Lista de Filmes"/>
  </div>
</template>

<script>
import Movies from '@/components/Movies.vue'

export default {
  name: 'Home',
  components: {
    Movies
  }
}
</script>
