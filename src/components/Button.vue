<template>
    <button value="{{title}}">
        {{title}}
    </button>
</template>

<style>
    button {
        border: none;
        background: #2c3e50;
        border-radius: 0.25em;
        padding: 12px 20px;
        color: #ffffff;
        font-weight: bold;
        float: right;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        appearance: none;
        cursor: pointer;
        text-transform: uppercase;
    }
    button:hover {
        background-color: #e12236;
    }
    button:focus {
        outline: none;     
    }
    button:disabled {
        opacity: 0.5;
    }
</style>

<script>
    export default {
        name: 'Button',
        props: {
            title: String
        }
    }
</script>