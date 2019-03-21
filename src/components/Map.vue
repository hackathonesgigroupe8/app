<template>
    <div>
      <Instruction/>
      <InteractiveMap/>
      <Description/>
    </div>
</template>

<script>
import InteractiveMap from './map/InteractiveMap.vue'
import Description from './map/Description.vue'
import Instruction from './map/Instruction.vue'

export default {
  name: 'Map',
  components: {
    InteractiveMap,
    Description,
    Instruction
  },
  data: function(){
    return{
      isSelectedCountry: false
    }
  }
}
</script>

<style scoped>
  #description{
    margin-top: 14vw;
    margin-left:64px;
  }

  #instruction{
    z-index: 1;
    position:absolute;
    width:100%;
    padding:2px;
    bottom:0;
  }

  @media (min-width: 742px) {
     #instruction {
        width:55%;
    }
  }
</style>
