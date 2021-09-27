<template>
    <h2>{{title}}</h2>

    <form action="POST" id="register" @submit.prevent="addMovie">
        <fieldset>           
            <div class="control">
                <label for="name">
                    Nome:
                </label>

                <input type="text" name="nome" id="name" @model="movies.movie.name"/>
            </div>

            <div class="control">
                <label for="gender">
                    Gênero:
                </label>

                <input type="text" name="gender" id="gender" @model="movies.movie.gender" />
            </div>

            <div class="control">
                <label for="description">
                    Descrição:
                </label>

                <textarea name="description" id="description" cols="30" rows="20" @model="movies.movie.description"></textarea>
            </div>
            
            <Button title="Cadastrar" />
        </fieldset>
    </form>
</template>

<script>
import Button from '@/components/Button.vue'

    export default {
        name: 'Form',
        props: {
            title: String
        },
        components: {
            Button
        },
         methods: {
            addMovie(movie) {
                this.$store.dispatch('setMovie', movie);
            }
        },
    }
</script>