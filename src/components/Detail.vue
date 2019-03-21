<template>
    <div>
        <div id="mySidenav" class="sidenav hideSidebar">
            <DetailCountry v-if="detail" v-bind:country="country"/>
            <ListArticleCountry v-if="list" />
        </div>
    </div>
</template>

<script>
    import DetailCountry from '../components/details/DetailCountry.vue'
    import ListArticleCountry from "../components/details/ListArticleCountry.vue";

    export default {
        name: 'detail',
        components: {
            ListArticleCountry,
            DetailCountry,
        },
        props: {
            country: Object,
        },
        data () {
            return {
                message:  "test",
                detail : true,
                list: false
            }
        },

        mounted()
        {
            document.getElementById("closeNav").addEventListener('click',() =>
            {
                document.getElementById("mySidenav").classList.remove('hideSidebar');
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>