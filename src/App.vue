<template>
    <div>
        <Header/>
        <Map/>
        <Detail/>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Detail from "./components/Detail.vue";
    import Map from './components/Map.vue'

    export default {
        name: 'app',
        components: {
            Header,
            Detail,
            Map
        },
        data () {
            return {
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        width: 100%

    }
    body{
        overflow: hidden;
    }

</style>
