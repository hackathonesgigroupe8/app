<template>
    <div>
        <a href="javascript:void(0)" class="closebtn" id="closeNav">&times;</a>
        <h1 style="margin-bottom: 32px;">France</h1>
        <p style="margin-bottom: 32px;">
            Regarding global pollution in 2016 and according to data collected in the media, the public opinion is not
            aware of the problem.</p>
        <h3 style="margin-bottom: 26px;">Rating </h3>

        <div class="row">
            <div class="six columns">
                <label class="small">Media representation index</label>
                <p class="number">1 2 3 4 5 6</p>
            </div>
            <div class="six columns">
                <label class="small">Articles in the last mounth</label>
                <p class="numberK">2.3K <a href="#" v-on:click="showArticles" class="hover2" style="margin-top: -43px;text-align: center;">Seen in a list</a></p>
            </div>
        </div>

        <div class="row">
            <div class="six columns">
                <label class="small">Specialised media presence</label>
                <p class="high">High</p>
            </div>
            <div class="six columns">
                <label class="small">Generalist media presence</label>
                <p class="low">Low</p>
            </div>
        </div>

        <div class="row">
            <div>
                <label class="small" style="margin-bottom: 12px;">Main topics in media</label>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
            </div>
        </div>

        <div class="row">
            <div>
                <label class="small" style="margin-bottom: 12px;">Scientific topics representation</label>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
                <p class="button">Biodiversity</p>
            </div>
        </div>

        <button class="share">Share result</button>
    </div>

</template>


<script>
export default {
name: 'DetailCountry',props: ['showArticles'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
