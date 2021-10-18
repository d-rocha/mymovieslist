<template>
    <div class="container">
        <div class="movies no-movies" v-if="movies.length == 1 ">
            <img 
                alt="My Movies List logo" 
                title="My Movies List logo" 
                src="../assets/logo.png"
            />
            <span>NAO EXISTEM FILMES A EXIBIR</span>
        </div>


        <div class="control filter" v-if="movies.length > 1">
            <p>Filtrar por gênero</p>

            <select 
                name="filter" 
                class="filter" id="filter" @change="handleChange($event)">
                <option value="">Escolha uma opção</option>
                <option 
                    v-for="item in genderOption" 
                    :key="item" 
                    :value="item"
                >
                    {{item}}
                </option>
            </select>            
        </div>

        <div v-bind:class="movies.length > 4 ? 'movies-slide' : 'movies'" v-if="movies.length > 1">
            <div class="movies-card" v-for="movie in movies" :key="movie.id">                
                <div class="card" v-if="movie.id != '' && selected == ''">
                    <div class="card_image">
                        <img src="../assets/card_image.webp" alt="Card Movie" />
                    </div>

                    <div class="gender-movie">
                        <span>
                            {{movie.gender}}
                        </span>
                    </div>
                    <div class="title-movie">
                        <p>
                            {{movie.name}}
                        </p>
                    </div>
                
                    <div class="description-movie">
                        <p>
                            {{movie.description}}
                        </p>                        
                    </div>

                    <div class="card-footer clearfix">
                        <div class="one-third date-movie">
                            <div class="created-at">
                                <span>
                                    Criado em:
                                </span>
                            </div>
                            <div class="stat-value date-value">
                                <span>
                                    {{movie.datetime}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card" v-if="movie.id != '' && selected == movie.gender">
                    <div class="card_image">
                        <img src="../assets/card_image.webp" alt="Card Movie" />
                    </div>

                    <div class="gender-movie">
                        <span>
                            {{movie.gender}}
                        </span>
                    </div>
                    <div class="title-movie">
                        <p>
                            {{movie.name}}
                        </p>
                    </div>
                
                    <div class="description-movie">
                        <p>
                            {{movie.description}}
                        </p>                        
                    </div>

                    <div class="card-footer clearfix">
                        <div class="one-third date-movie">
                            <div class="created-at">
                                <span>
                                    Criado em:
                                </span>
                            </div>
                            <div class="stat-value date-value">
                                <span>
                                    {{movie.datetime}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            
            

        </div>

        <div class="action">
            <router-link to="/newmovie">
                <Button title="Cadastrar novo filme"/>
            </router-link>
        </div>
    </div>

</template>

<style>
    *::-webkit-scrollbar {
        width: 12px;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
    *::-webkit-scrollbar-thumb {
        background-color: #2c3e50;
        border-radius: 20px;    
    }
    .container {
        display: flex;
        flex-direction: column;    
        margin: 0 auto;
        width: 50%;
    }
    .container {
        color: #fff;
        text-transform: uppercase;
    }
    .container .no-movies {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0 20px;
    }
    .container select {
        width: 30%;
        margin: 0 auto;
    }
    .container button {
        width: 3
        0%;
        margin: 0 auto;
    }
    .container .action a {
        display: flex;
        width: 100%;
    }
    .container .action a  button:hover {
        color: #2c3e50;
        background-color: #fff;        
    }
    select {
        position: relative;
        display: block;
        width: 100%;
        cursor: pointer;        
        color: #2b3e51;
        padding: 12px;
        border: 1px solid #cfd9db;
        background-color: #ffffff;
        border-radius: 0.25em;        
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    }
    select:focus {
        outline: none;
        border-color: #2c3e50;
        box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
    }
    .movies {
        display: flex;
        margin-bottom: 30px;
        padding-bottom: 20px;
    }
    .movies-slide {
        display: flex;
        margin-bottom: 30px;
        padding-bottom: 20px;
        overflow: hidden;
        overflow-x: scroll;
    }
    .movies-card {
        padding-top: 30px;
        margin: 0 0 30px 20px;
    }
    .movies-card:focus {
        outline: 0;
    }
    .card {
        background: white;
        width: 300px;
        display: inline-block;
        margin: auto;
        border-radius: 19px;
        position: relative;
        text-align: center;
        box-shadow: -1px 15px 30px -12px black;
        z-index: 9999;
    }
    .card_image {
        position: relative;
        height: 230px;
        margin-bottom: 35px;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
    }
    .card_image img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 300px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
    .gender-movie {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 3px;
        color: #ec9b3b;
    }
    .title-movie {
        font-size: 16px;
        color: black;
        font-weight: 900;
        margin-bottom: 5px;
    }
    .description-movie {
        height: 90px;
        padding: 10px 20px;
        margin-bottom: 20px;
    }
    .description-movie p {
        display: -webkit-box;
        font-size: 14px;
        color: #d23f32;
        overflow: hidden;
        word-break: break-all;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
    .card-footer {
        background: #d23f32;
    }    
    .card-footer {
        color: white;
        font-weight: 700;
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
    }
    .card-footer .date-movie {
        padding: 20px 15px;
    }
    .card-footer .created-at {
        position: relative;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .card-footer .date-value {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
    }
    .card-footer .no-border {
        border-right: none;
    }
    .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }
</style>

<script>    
    import Button from '@/components/Button.vue';

    export default {
        name: 'Movies',
        components: {        
            Button
        },
        props: {
            titleMovie: String            
        },        
        computed: {
            movies() {
                return this.$store.getters.movies;
            }
        },
        data() {
            return {
                genderOption: [                    
                    'Ação',
                    'Animação',
                    'Aventura',
                    'Comédia',
                    'Documentário',
                    'Ficção',
                    'Heróis',
                    'Romance'
                ],
                selected: ''                
            }
        },
       methods: {
            handleChange(e) {                
                this.selected = e.target.value;
                return this.selected; 
            }            
        }
    }
</script>