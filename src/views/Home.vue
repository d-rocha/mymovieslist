<template>
  <div class="home">
    <Movies />
  </div>
</template>

<style>
  .home {
    width: 100vw;
    height: 80vh;
    margin-top: 20px;
  }
</style>

<script>
  import Movies from '@/components/Movies.vue';

  export default {
    name: 'Home',
    components: {
      Movies
    }
}
</script>
