<template>
    <div>
        <a href="#" v-on:click="showDetails" class="closebtn" id="closeNavbar"> 
            <img src="../../../public/back.svg" alt="Close map" class="backIcon">    
        </a>
        <h1 style="margin-bottom: 32px;margin-top: 56px;">All articles for {{ country.name }} </h1>

        <div style="margin-bottom: 10px;">
            <a href="#" class="titleSection" v-on:click="showCategory(index)" v-for="(article,index) in nbArticles" :key="article.id">
                   {{ article['categ'].charAt(0).toUpperCase() + article['categ'].slice(1) }} 
                   
            </a>
            <div v-for="(article,index) in nbArticles" :key="article.id" :id='index' class="display">
                        <a class="hover2" v-for="article in article.list.slice(0, 50)" :key="article.id" target="_blank" :href="article.url">
                            {{ article.name }}
                        </a>
                   </div>
        </div>
        
    </div>

</template>


<script>
    import axios from 'axios';

    export default {
        name: 'ListArticleCountry',
        props: {
            country: Object,
            showDetails: Function,
        },
         watch: {
            country: function () {
            this.getData(this.country.code, 'eea_ip_2018')
            }
        },
        data() {
            return ({
                nbArticles: [],

            })
        },
        methods: {
            getData(code, dataset) {
                let vm = this;
                const requestBody = {
                    "code": code,
                    "dataset": dataset,
                };

                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                axios.post('http://localhost:8060/stats', requestBody, config)
                    .then((res) => {
                        vm.nbArticles = res.data.articles;

                    })
                    .catch((err) => {
                        return err;
                    })
            },
            showCategory(id){
                var divArticles = document.getElementsByClassName("display");
                Array.from(divArticles).forEach((el) =>{
                    el.style.display = "none"
                })
                document.getElementById(id).style.display = "block"
            }
        },
        mounted() {
            this.getData(this.country.code, 'eea_ip_2018');
        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .display{
        display: none;
        clear: both;
        margin-top: 26px
    }
    .closebtn{
        float: left;
            margin-top: -10px!important;
    }
    .hover {
        padding: 5px 14px 14px 0px !important;
        text-decoration: none !important;
        font-size: 18px !important;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        display: inline-block !important;
        color: #9ba0a5 !important;

    }
    .titleSection{
        font-size: 16px!important;
        padding-left: 0!important;
        float: left;
        margin-right: 24px;
        margin-bottom: 24px;
    }
    .hover2 a {
        padding: 5px 14px 14px 0px !important;
        text-decoration: underline !important;
        font-size: 14px !important;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #4a5056 !important;
        cursor: pointer;
    }
    
    .article{
        display: none;
    }
</style>

