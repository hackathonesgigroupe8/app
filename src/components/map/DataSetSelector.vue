<template>
    <div id="dataSetSelect">
      <p class="descDataset">Topic</p>
        <select id="pollutionType">
            <option value="EEA-IT-2018">Global pollution in 2018</option>
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
      position:fixed;
  }
  #dataSetSelect{
      margin-top: 48px
  }
  .descDataset{
      color: #ba9068;
      margin-bottom: 8px;
  }
</style>
