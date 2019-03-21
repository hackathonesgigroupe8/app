<template>
    <div>
        <a href="javascript:void(0)" class="closebtn" id="closeNav">&times;</a>
        <h1 style="margin-bottom: 32px;">{{ countryName }}</h1>
        <p style="margin-bottom: 32px;">
            Regarding global pollution in 2016 and according to data collected in the media, the public opinion is {{ awareTitle }} of the problem.</p>
        <h3 style="margin-bottom: 26px;">Rating </h3>

        <div class="row">
            <div class="six columns">
                <label class="small">Media representation index</label>
                <p class="number">{{ scaleIndex }}</p>
            </div>
            <div class="six columns">
                <label class="small">Articles in the last mounth</label>
                <p class="numberK">{{ nbOfArticles }} <a href="#" v-on:click="showArticles" class="hover2"
                                           style="margin-top: -43px;text-align: center;">Seen in a list</a></p>
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
                <label class="small" style="margin-bottom: 12px;">Main topics in media</label>

                <p v-for="topic in topicMedia" :key="topic .id" class="button">
                    {{ topic[0] }}
                </p>
            </div>
        </div>

        <div class="row">
            <div>
                <label class="small" style="margin-bottom: 12px;">Scientific topics representation</label>
                <p  class="button"></p>
            </div>
        </div>

        <button class="share">Share result</button>
    </div>

</template>


<script>
    import axios from 'axios';
    export default {
        name: 'DetailCountry',
        props: ['showArticles'],
        data() {
            return {
                countryName: "",
                awareTitle: "",
                scaleIndex : 0,
                nbOfArticles: 0,
                specilizedMedia: "",
                generalistMedia: "",
                topicMedia: [],

            }
        },
        methods : {
            getData(code, dataset){
                let vm = this;
                const requestBody = {
                    "code": code,
                    "dataset": dataset,
                }

                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                axios.post('http://localhost:8060/stats', requestBody, config)
                    .then((res) => {
                        vm.nbOfArticles = res.data.nbArticles;
                        vm.scaleIndex = res.data.notation.toFixed(2);
                        vm.specilizedMedia = res.data.specializedRepresentation.toFixed(2);
                        vm.generalistMedia = res.data.generalistRepresentation.toFixed(2);
                        vm.topicMedia = res.data.topicsInMedia;

                    })
                    .catch((err) => {
                        return err;
                    })
            }
        },
        mounted()
        {
            this.getData('FR', 'eea_ip_2018');
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
