<template>
    <div>
        Services
    </div>
</template>

<script>
    export default {
        name: 'Services',
        components: {
        },
        data: function () {
            return {
                isSelectedCountry: false
            }
        }
    }
</script>

<style scoped>
    #description {
        margin-top: 10vw;
        margin-left: 64px;
    }

    #instruction {
        z-index: 1;
        position: absolute;
        width: 100%;
        padding: 2px;
        bottom: 0;
    }

    @media (min-width: 742px) {
        #instruction {
            width: 55%;
        }
    }
</style>
