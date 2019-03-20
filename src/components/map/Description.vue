<template>
    <div id="description">
      <h1>What is eco-aware rate ?</h1>
      <p>EAR is a platform for comparing scientific data and how it is represented in the media.
      The aim is to provide a tool that gives an overview, on a specific set of data the current state of the awareness in public opinion and in the media</p>
    </div>
</template>

<script>
export default {
  name: 'Description'
}
</script>

<style>
  h1{
    color:#ba9068;
  }
  #description {
    width:100%;
    text-align: left;
    margin-left: 5px;
  } 

  @media (min-width: 742px) {
    #description {
      width:49%;
    }
  }
</style>
