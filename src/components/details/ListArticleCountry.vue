<template>
    <div>
        <a href="#" v-on:click="showDetails" class="closebtn" id="closeNav"></a>
        <h1 style="margin-bottom: 32px;">All articles for France </h1>


        <div style="margin-bottom: 10px;">
            <a href="#" class="hover">Biodiversity</a>
            <a href="#" class="hover">Biodiversity</a>
            <a href="#" class="hover">Biodiversity</a>
            <a href="#" class="hover">Biodiversity</a>
        </div>


        <div>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
        </div>

        <button class="share">Share result</button>

    </div>
    
</template>


<script>
    export default {
        name: 'ListArticleCountry',props: ['showDetails'],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>

