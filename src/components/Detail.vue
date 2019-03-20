<template>
    <div>
        <div id="mySidenav" class="sidenav">
            <DetailCountry v-if="detail" />
            <ListArticleCountry v-if="list" />
        </div>
        <span style="font-size:30px;cursor:pointer;margin:7px;" id="openNav" >&#9776;</span>
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
        data () {
            return {
                message:  "test",
                detail : true,
                list: false
            }
        },

        mounted()
        {
            document.getElementById("openNav").addEventListener('click',() =>
            {
                document.getElementById("mySidenav").classList.add('hideSidebar');
            })
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