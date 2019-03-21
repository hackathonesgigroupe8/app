<template>
    <div id="dataSetSelect">
      <p class="descDataset">Topic</p>
        <select id="pet-select">
            <option value="global-pollution">Global pollution in 2018</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'DataSetSelector'
}
</script>
  
<style>
  #select{
      z-index: 1;
  }
  #dataSetSelect{
      margin-top: 48px
  }
  .descDataset{
        color: #ba9068;
      margin-bottom: 8px;
  }
</style>
