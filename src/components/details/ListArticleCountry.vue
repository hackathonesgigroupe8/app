<template>
    <div>
        <a href="#" v-on:click="showDetails" class="closebtn" id="closeNav"><</a>
        <h1 style="margin-bottom: 32px;">All articles for France </h1>


        <div style="margin-bottom: 10px;">
            <a href="#" class="hover">Biodiversity</a>
            <a href="#" class="hover">Biodiversity</a>
            <a href="#" class="hover">Biodiversity</a>
            <a href="#" class="hover">Biodiversity</a>
        </div>


        <div>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018rsity</a>
            <a href="#" class="hover2">The biodiverity in Paris since 2018</a>
        </div>

        <button class="share">Share result</button>

    </div>
    
</template>


<script>
    export default {
        name: 'ListArticleCountry',props: ['showDetails'],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @font-face {
        font-family: "Avenir Next";
        src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
        url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
    }
    body{
        margin: 0;
        padding: 0;
        font-family: "Avenir Next", sans-serif;
    }

    nav a {
        text-decoration: none;
        color: #4d4d4d;
        padding: 0 46px 0 6px;
        float: right;
        margin-top: 21px;
        height: 50px;
        display: inline-block;
    }
    select {
        text-decoration: none;
        color: #4d4d4d;
        padding: 0 46px 0 6px;
        float: right;
        margin-top: 7px;
        margin-right: 14px;
        height: 50px;
        display: inline-block;
        background-color: white;
        border: none;
    }
    nav {
        width: 1440px;
        height: 80px;
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.11);
        background-color: #ffffff;
        position: sticky;
        top: 0;
        padding: 12px 24px;
        z-index: 10;
        box-sizing: border-box;
    }

    img{
        display: inline-block;
        height: 30px;
        margin-top: 15px;
    }

    .sidenav {
        height: 100%;
        right: 0;
        width: 50%;
        position: absolute;
        z-index: 1;
        overflow-x: hidden;
        transition: 0.5s;
        box-sizing: border-box;
        padding: 72px 48px 0;
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        transform: translateX(100%);
        top:0;
    }
    .hideSidebar{
        transform: translateX(0);
    }

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: relative;
        right: 25px;
        font-size: 36px;
        color: black;
        margin-top: 10px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }

    h1{
        font-size: 28px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        color: #4a5056;
    }

    h3{
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #4a5056;
    }

    p{
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #4a5056;
    }
    .lead{
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #4a5056;

    }
    .button {border-radius: 100px;
        border: solid 1px #c8cccf;
        background-color: #f1f2f4;
        margin-left: 7px;}

    .small{
        font-size: 13px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #878c91;
    }

    .selected{
        width: 209px;
        height: 36px;
        border-radius: 3px;
        border: solid 1px #d7dade;
        background-color: #ffffff;
    }

    .number{
        font-size: 32px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #9ba0a5;
    }

    .numberSelected{
        font-size: 32px;
        font-style: normal;
        font-stretch: normal;
        font-weight: 600;
        color: #6ba036;
    }
    .numberK{
        font-size: 32px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #4a5056;
    }
    .high{
        font-size: 28px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        color: #5d9122;
    }
    .low{
        font-size: 28px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        color: #aa8f72;
    }
    .share{
        height: 36px;
        border-radius: 3px;
        border: solid 1px #d7dade;
        background-color: #ffffff;
        line-height: 36px;
        padding: 0 12px;
        float: right;
        margin-top: 30px;
    }
    .hover{
        padding: 5px 14px 14px 0px!important;
        text-decoration: none !important;
        font-size: 18px !important;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        display: inline-block !important;
        color: #9ba0a5 !important;
        margin-right: 20px;
    }
    .hover2{
        padding: 5px 14px 14px 0px!important;
        text-decoration: underline !important;
        font-size: 14px !important;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #4a5056 !important;
    }


</style>

