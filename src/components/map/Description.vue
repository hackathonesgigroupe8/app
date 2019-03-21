<template>
    <div id="description">
      <h1>What is eco-aware rate ?</h1>
      <p>EAR is a platform for comparing scientific data and how it is represented in the media.
      The aim is to provide a tool that gives an overview, on a specific set of data the current state of the awareness in public opinion and in the media</p>
    <DataSetSelector/>
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
    color:#ba9068;
  }
  #description {
    width:70vw;
    text-align: left;
    margin-left: 5px;
  } 

  @media (min-width: 742px) {
    #description {
      width:37vw;
    }
  }
</style>
