<template>
    <div id="nav">
        <div class="logo">
            <router-link to="/">
                <img 
                    src='../assets/logo.png'
                    alt="Minha lista de filmes logo" 
                    title="Minha lista de filmes logo" 
                />
            </router-link>
        </div>
        <ul class="header-links">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/newmovie">Cadastrar Filme</router-link>
            </li>
        </ul>
  </div>
</template>

<style>
    #nav {
        display: flex;
        justify-content: flex-start;
        width: 96.8%;
        padding: 10px 30px;
        background-color: #e0e0e0;
    }
    #nav .header-links {
        display: flex;
        text-decoration: none;
    }
    #nav .header-links li {
        margin-right: 30px;
        list-style: none;
    }
    #nav a {
        font-weight: bold;
        text-decoration: none;
        color: #2c3e50;
        text-transform: uppercase;
    }
    #nav a.router-link-exact-active {        
        color: #e92239;
    }
    #nav .logo {
        margin-left: 400px;
    }
    #nav .logo img {
        width: 50px;
    }
    @media screen and (max-width: 1440px) {
        #nav .logo {
            margin-left: 270px;
        }
    }
    @media screen and (max-width: 1368px) {
        #nav .logo {
            margin-left: 260px;
        }
    }    
</style>
<script>
    export default {
        name: 'Header'        
    }
</script>