<template>
    <button value="{{title}}">
        {{title}}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            title: String
        }
    }
</script>