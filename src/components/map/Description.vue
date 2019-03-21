<template>
    <div id="description">
      <h1>Be aware on ecology opinion trends </h1>
      <p class="hero">EAR is a platform for comparing scientific data and how it is represented in the media.
      The aim is to provide a tool that gives an overview, on a specific set of data the current state of the awareness in public opinion and in the media</p>
    <DataSetSelector/>
        <p class="light">Source</p>
        <img class="logos" src="logos.jpg">
    </div>
</template>

<script>
import DataSetSelector from './DataSetSelector.vue'

export default {
  name: 'Description',
  components:{
    DataSetSelector
  }
}
</script>

<style>
  h1{
    color: #ba9068;
  }
  #description {
    width:70vw;
    text-align: left;
    margin-left: 5px;
  }
  .hero{
      line-height: 2.2;
      color: #4A5056;
      font-size: 14px;
  }
.light{
    margin-top: 48px;
    color: #AAACB0;
    font-size: 12px;
}
.logos{
    height: 45px
}
  @media (min-width: 742px) {
    #description {
      width:37vw;
    }
  }
</style>
