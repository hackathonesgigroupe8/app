<template>
    <div class="closeDetail">
        <a href="#" class="styledBtn closeDetailBtn" id="closeNav" v-on:click="$emit('close-detail', true)">
            <img src="../../../public/back.svg" alt="Close map" class="backIcon">
            Back to home
        </a>
    </div>
</template>


<script>
    export default {
        name: 'CloseDetail',
        mounted()   
        {
            document.getElementById("closeNav").addEventListener('click',() =>{
                document.getElementById("mySidenav").classList.remove('hideSidebar');
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .closeDetailBtn{
        position: fixed;
        top:128px;
        left:42px;
    }

    .backIcon{
        margin-left: 4px;
        margin-top: 11px;
        margin-right: 12px;
        float: left;
    }
</style>
