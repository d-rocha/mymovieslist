<template>
    <h2>{{title}}</h2>

    <form id="register" @submit.prevent="addMovie"  method="post">        
        <fieldset class="fieldset">
            <p v-if="errors.length" class="error">
                <span>Por favor, corrija o(s) seguinte(s) erro(s):</span>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <legend class="new-movie">Novo Filme</legend>
            <div class="control">
                <label for="name">
                    Nome:
                </label>

                <input type="text" name="nome" id="name" v-model="movie.name" />
            </div>

            <div class="control">
                <label for="gender">
                    Gênero:
                </label>

                <select name="gender-option" id="gender-option" v-model="movie.gender">
                    <option                     
                        v-for="item in genderOption"
                        :value="item"
                        :key="item"
                    >
                        {{item}}
                    </option>
                </select>                
            </div>

            <div class="control">
                <label for="description">
                    Descrição:
                </label>

                <textarea 
                    name="description" 
                    id="description" 
                    cols="30" rows="20"
                    maxlength="137"
                    v-model="movie.description"
                >
                </textarea>                
            </div>
            
            <Button title="Cadastrar" :disabled="loading" />
            <Loader  v-if="loading"/>
        </fieldset>
    </form>    
</template>

<style>
    #register {
        font-size: 16px;
        width: 500px;
        padding: 15px 30px;
        border-radius: 4px;
        margin: 20px auto;
        width: 500px;
        background-color: #fff;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);        
    }
    #register .fieldset {
        position: relative;
        margin: 24px 0 0 0;
        padding: 20px;
    }
    #register .fieldset legend {
        
    }
    #register .fieldset .load-wrapp {
        position: absolute !important;
        bottom: 40%;
        left: 40%;
    }
    #register .fieldset .error {
        color: #e82239;
        font-size: 11px;
        text-align: left;
    }
    #register .fieldset .error ul {
        padding: 0;
        line-height: 1rem;
    }
    #register .fieldset .error ul li {
        list-style: none;
    }
    #register .fieldset .new-movie {
        margin: 24px 0 0 0;
        padding: 0 30%;
    }
    #register .new-movie {
        padding-bottom: 10px;        
    }
    #register div {
        position: relative;
        margin: 20px 0;
    }
    #register label {
        display: block;
        color: #94aab0;
        margin-bottom: 10px;
        text-align: start;
    }
    #register select {
        width: 100%;
    }
    #register legend {
        color: #2b3e51;
    }
    #register input,
    #register textarea,
    #register label {
        width: 100%;
        display: block;
        color: #2b3e51;
        appearance: none;
        padding: 12px 0;
    }    
    #register input,
    #register textarea {
        padding: 12px;
        width: 94.5%;
    }
    #register input,
    #register textearea {
        border: 1px solid #cfd9db;
        background-color: #ffffff;
        border-radius: 0.25em;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    }
    #register input:focus,
    #register textarea:focus {
        outline: none;
        border-color: #2c3e50;
        box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
    }
    #register textarea {
        height: 120px;        
        resize: vertical;
        overflow: auto;
    }
    .has-error {
        border: 1px solid #e32237 !important;
    }
    .no-error {
        border: 1px solid #cfd9db;
    }        
</style>

<script>
    import Button from '@/components/Button.vue';
    import Loader from '@/components/Loader.vue';

    export default {
        name: 'Form',
        props: {
            title: String
        },
        components: {
            Button,
            Loader
        },
        data() {
            return {
                movie: {
                  id: '',  
                  name: '',
                  gender: '',
                  description: '',
                  datetime: ''
                },
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
                errors: [],                
                loading: false,
            }
        },
        computed: {
            allMovies() {
                return this.$store.getters.movies;
            }
        },
         methods: {
            addMovie() {
                let hasError = this.validateForm();                
                let hasMovie = this.ifMovieExist();

                if(hasError.length > 0) return false;

                if(hasMovie) {
                    this.errorAlert();
                    return false;
                }                

                this.loading = true;
                this.successAlert();
                this.$store.dispatch('newMovie', this.movie);
                
                setTimeout(() => {
                    this.loading = false;
                    this.goToHome();
                }, 3000);
            },
            ifMovieExist() {
                let movies = this.$store.state.movies;                
                
                for(let i = 0; i < movies.length; i++) {
                    if (movies[i].name == this.movie.name && movies[i].gender == this.movie.gender)
                        return true;
                }
            },
            validateForm() {
                if(this.errors.length > 0) this.errors = [];                                    

                if(!this.movie.name)
                    this.errors.push('O campo nome é obrigatório.');                    

                if(!this.movie.gender)
                    this.errors.push('O campo gênero é obrigatório.');                    

                if(!this.movie.description)
                    this.errors.push('O campo descrição é obrigatório.');                

                return this.errors;                    
            },
            successAlert() {
                this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Filme cadastrado com sucesso',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 2500,
                    toast: true,                    
                })
            },
            errorAlert() {
                this.$swal("Oops...", "Esse filme já foi cadastrado!", "error")
            },
            goToHome() {
                this.$router.push('/');
            }
        },
    }
</script>