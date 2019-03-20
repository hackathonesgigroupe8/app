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
    height: 100%;
    position: absolute;
    top:33%;
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
