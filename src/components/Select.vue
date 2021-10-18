<template>    
    <p>{{title}}</p>
    <select 
        name="filter" 
        class="filter" id="filter"  @change="handleChange($event)">
        <option value="">Escolha uma opção</option>
        <option 
            v-for="item in genderOption" 
            :key="item" 
            :value="item"
        >
            {{item}}
        </option>
    </select>
    
</template>

<style>
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
</style>

<script>
    export default {
        name: 'Select',
        props: {
            title: String,
        },
        model: {
            event: 'change'
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
                selected: false,
                val: ''
            }
        },
        methods: {
            handleChange(e) {
                console.log('mexeu', e.target.value);
            }
        }
    }
</script>