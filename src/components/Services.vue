<template>
    <div class="page_two_columns">
        <div class="descriptionMargin">
            <h1>Our services</h1>
            <h3>A partner for your strategic intelligence</h3>
            <p>EAR is a platform that mesure hot topics and trend subjects.<br>Our know-how provides you vigil and analytics about your public opinion perception </p>
            <p>Our company can also help you to know how to use the business platform. Don't hesitate to contact our <services class=""></services></p>
            <a href="mailto:services-client@ecoaware.com" class="styledBtn">Contact us</a>
        </div>
        <div class="infoPageImg serviceImg"></div>
    </div>
    
</template>

<script>
    export default {
        name: 'Services',
    }
</script>

<style scoped>
    .styledBtn{
        background-color: #fff;
        border: solid 1px #d7dade;
        transition-duration: .2s;
        padding: 12px 16px;
    }
    .styledBtn:hover{
        color: #222222;
        background-color: #d7dade;
    }
    .serviceImg {
        background-image: url("../../public/service.jpg");
    }
</style>
