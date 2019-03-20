<template>
    <div>
        <Header/>
        <Detail/>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Detail from "./components/Detail.vue";

    export default {
        name: 'app',
        components: {
            Header,
            Detail
        },
        data () {
            return {
            }
        }
    }



</script>

<style>
</style>

