<template>
    <div>
        <Header/>
        <Map/>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Map from './components/Map.vue'

    export default {
        name: 'app',
        components: {
            Header,
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

    .sidenav {
        height: 100%;
        right: 0;
        width: 50%;
        position: absolute;
        z-index: 1;
        overflow-x: hidden;
        transition: 0.8s;
        transition-timing-function: ease-in;
        box-sizing: border-box;
        padding: 72px 48px 0;
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        transform: translateX(100%);
        top:0;
    }
    .hideSidebar{
        transform: translateX(0);
    }

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: relative;
        right: 25px;
        font-size: 36px;
        color: black;
        margin-top: 10px;
    }

</style>
