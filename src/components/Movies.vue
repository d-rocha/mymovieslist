<template>
    <div class="container">
        <h2>{{titleMovie}}</h2>

        <select name="moviesList" id="moviesList">
            <option value=""></option>
        </select>

        <router-link to="/newmovie">
            <Button title="Cadastrar novo filme"/>
        </router-link>

        <ul class="movies">
            <li @for="movie in movies">{{movies}}</li>
        </ul>
    </div>

</template>

<style>
    .container {
        display: flex;
        flex-direction: column;    
        margin: 0 auto;
    }
    .container select, .container button {
        width: 30%;
        margin: 0 auto;
    }
    ul li {
        list-style: none;
    }
</style>

<script>
import Button from '@/components/Button.vue'
    export default {
        name: 'Movies',
        components: {
            Button
        },
        props: {
            titleMovie: String
        },
        data() {
            return { movie: {} };
        },
        computed: {
            movies() {
                return this.$store.state.movies;
            }
        },
    }
</script>