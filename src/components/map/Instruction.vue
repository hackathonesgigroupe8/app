<template>
    <div id="instruction">
      <p><i style="font-size:24px;" class="fa" id="infoIcon">&#xf05a;</i>Choose a country and discover more data about the ecological situation for the selected data set</p>
    </div>
</template>

<script>
export default {
  name: 'Instruction'
}
</script>

<style>
 #instruction {
    background-color: #ffffff;
    width:100%;
    text-align: left;
    margin-bottom: 25px;
    margin-left:5px;
    border: 1px solid #d8dbdf;
    box-sizing: border-box;
    right: 0;
    border-radius: 10px;
    text-align: center;
    animation-duration: 0.5s;
    animation-name: slidein;
 }

 #infoIcon{
     margin-right:20px
 }

  @media (min-width: 742px) {
     #instruction {
        width:55%;
        margin-right: 20px;
    }
  }

    @keyframes slidein {
    from {
      margin-right: -100%;
    }

    to {
      margin-right: 20px;
    }
  }
</style>
