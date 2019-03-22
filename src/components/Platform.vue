<template>
    <div class="page_two_columns">
        <div class="descriptionMargin">  
            <h1>Business platform</h1>
            <h3>Register to our business services platform</h3>
            <p>EAR is a platform that mesure hot topics and trend subjects.<br>Our platform provide :</p>
            <ul>
                <li>A ranking of corporate notoriety</li>
                <li>Detailed report on trends and subjects about ecology</li>
                <li>Negatives and positives trends</li>
                <li>More helping tools ...</li>

            </ul>
            <p>Request an  access to our business platform services</p>
            <a href="#" class="styledBtn">Request an access</a>
        </div>
        <div class="infoPageImg platformImg"></div>
    </div>
    
</template>

<script>
    export default {
        name: 'Platform',
    }
</script>

<style scoped>
    .styledBtn{
        background-color: #aa8f72;
        border: solid 1px #806b54;
        transition-duration: .2s;
        color: #fff;
        padding: 12px 16px;
    }
    .styledBtn:hover{
        background-color: #806b54;
    }
    .platformImg{
        background-image: url('../../public/platform.jpg')
    }
</style>
