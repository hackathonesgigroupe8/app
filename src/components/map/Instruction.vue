<template>
    <div class="instruction">
        <img src="../../../public/information.svg" alt="Close map" class="floatIcon">
        Choose a colored country and discover more data about the ecological situation for the selected data set
    </div>
</template>

<script>
    export default {
        name: 'Instruction'
    }
</script>

<style>
    .instruction {
        background-color: #ffffff;
        text-align: left;
        margin-bottom: 25px;
        margin-left: 5px;
        border: 1px solid #d8dbdf;
        box-sizing: border-box;
        z-index: 4;
        padding: 6px;
        border-radius: 4px;
        transition-duration: .2s;
        width: 780px;
        position: fixed;
        bottom: 0;
        right:-800px;
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.11);
        animation: showanim 9s;
        animation-iteration-count: 1;
    }

    @-webkit-keyframes showanim {
        0% {
            right: -800px;
        }
        10% {
            right: -800px;
        }
        20% {
            right: 42px;
        }
        90% {
            right: 42px;
        }
        100% {
            right: -800px;
        }
    }

    .floatIcon {
        margin-left: 8px;
        margin-top: 2px;
        margin-right: 8px;
        float: left;
    }

    .hidden {
        right: -800px;
    }
</style>
