<template>
    <div>
        <h1 style="margin-bottom: 32px;margin-top: 56px;">{{ country.name }}</h1>
        <p v-if="specilizedMedia > 0">
            Regarding global pollution in 2016 and according to data collected in the media, the public opinion is aware
            of the problem.
        </p>
        <p v-else-if="specilizedMedia < 0">
            Regarding global pollution in 2016 and according to data collected in the media, the public opinion is not
            aware of the problem.
        </p>
        <p v-else-if="specilizedMedia = 0">
            Regarding global pollution in 2016 and according to data collected in the media, the public opinion is bad
            aware of the problem.
        </p>
        <h3 style="margin-bottom: 26px;">Rating </h3>

        <div class="row">
            <div class="six columns">
                <label class="small">Media representation index</label>
                <p class="number">{{ scaleIndex }}</p>
            </div>
            <div class="six columns">
                <label class="small">Articles in the last mounth</label>
                <p class="numberK">{{ nbOfArticles }} <a href="#" v-on:click="showArticles" class="hover2"
                                                         style="margin-top: -43px;text-align: center;">Seen in a
                    list</a></p>
            </div>
        </div>

        <div class="row">
            <div class="six columns">
                <label class="small">Specialised media presence</label>
                <div v-if=" specilizedMedia > 0">
                    <p class="high">{{ specilizedMedia }}</p>
                </div>
                <div v-else-if="specilizedMedia < 0">
                    <p class="low">{{ specilizedMedia }}</p>
                </div>
                <div v-else>
                    <p class="number">{{ specilizedMedia }}</p>
                </div>

            </div>
            <div class="six columns">
                <label class="small">Generalist media presence</label>
                <div v-if=" generalistMedia > 0">
                    <p class="high">{{ generalistMedia }}</p>
                </div>
                <div v-else-if="generalistMedia < 0">
                    <p class="low">{{ generalistMedia }}</p>
                </div>
                <div v-else>
                    <p class="number">{{ generalistMedia }}</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div>
                <label class="small" style="margin-bottom: 12px;">Trends topics in media</label>

                <p v-for="topic in topicMedia.slice(0, 10)" :key="topic.id" class="button">
                    {{ topic[0] }}
                </p>
            </div>
        </div>

        <div class="row">
            <div>
                <label class="small" style="margin-bottom: 12px;">Trends negatives topics</label>
                <p v-for="top in negativeTop.slice(0, 10)" :key="top.id" class="button">
                    {{ top[1] }}
                </p>
            </div>
        </div>

        <router-link to="/services"><button class="share" ><svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
            <title>information</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-731.000000, -838.000000)" fill="#AA8F72" fill-rule="nonzero">
                    <g id="information" transform="translate(731.000000, 838.000000)">
                        <path d="M9.5,0 C4.2617,0 0,4.26175758 0,9.50005758 C0,14.7383576 4.2617,19 9.5,19 C14.7383,19 19,14.7383576 19,9.50005758 C19,4.26175758 14.7383,0 9.5,0 Z M9.5,17.2727273 C5.21406061,17.2727273 1.72727273,13.7859394 1.72727273,9.50005758 C1.72727273,5.21417576 5.21406061,1.72727273 9.5,1.72727273 C13.7859394,1.72727273 17.2727273,5.21417576 17.2727273,9.50005758 C17.2727273,13.7859394 13.7858818,17.2727273 9.5,17.2727273 Z" id="Shape"></path>
                        <path d="M9.5,3.8 C8.97616023,3.8 8.55,4.22636 8.55,4.7504275 C8.55,5.27402 8.97616023,5.7 9.5,5.7 C10.0238398,5.7 10.45,5.27402 10.45,4.7504275 C10.45,4.22636 10.0238398,3.8 9.5,3.8 Z" id="Shape"></path>
                        <path d="M9.5,7.6 C8.97534667,7.6 8.55,7.97217833 8.55,8.43125 L8.55,13.41875 C8.55,13.8778217 8.97534667,14.25 9.5,14.25 C10.0246533,14.25 10.45,13.8778217 10.45,13.41875 L10.45,8.43125 C10.45,7.97217833 10.0246533,7.6 9.5,7.6 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </svg> Your business needs advice ?</button></router-link>
    </div>

</template>


<script>
    import axios from 'axios';

    export default {
        name: 'DetailCountry',
        props: {
            country: Object,
            showArticles: Function
        },
        watch: {
            country: function () {
            this.getData(this.country.code, 'eea_ip_2018')
            }
        },
        data() {
            return {
                countryName: "",
                scaleIndex: 0,
                nbOfArticles: 0,
                specilizedMedia: "",
                generalistMedia: "",
                topicMedia: [],
                negativeTop: [],

            }
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
                        vm.nbOfArticles = res.data.nbArticles;
                        vm.scaleIndex = res.data.notation.toFixed(2);
                        vm.specilizedMedia = res.data.specializedRepresentation.toFixed(2);
                        vm.generalistMedia = res.data.generalistRepresentation.toFixed(2);
                        vm.topicMedia = res.data.topicsInMedia;
                        vm.negativeTop = res.data.negTopics
                    })
                    .catch((err) => {
                        return err;
                    })
            }
        },
        created() {
    
            this.getData(this.country.code, 'eea_ip_2018');
        },
       
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .share{
        height: 36px;
        border-radius: 5px;
        border: solid 1px #d7dade;
        background-color: #ffffff;
        line-height: 36px;
        padding: 0 12px;
        float: right;
        margin-top: 30px;
        text-transform: initial;
    }
    .share > svg{
        float: left;
        margin-top: 7px;
        margin-right: 8px;
    }
</style>
