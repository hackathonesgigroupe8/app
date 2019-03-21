<template>
    <div>
        <Header/>
        <router-view />
    </div>
</template>

<script>
    import Header from "./components/Header.vue";

    export default {
        name: 'App',
        components: {
            Header,
        },
        data() {
            return {}
        }
    }
</script>

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

    .hover{
        padding: 5px 14px 14px 0px!important;
        text-decoration: none !important;
        font-size: 18px !important;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        display: inline-block !important;
        color: #9ba0a5 !important;

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

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        width: 100%

    }

    h1 {
        font-weight: 500;
        font-size: 32px;
    }

    body {
        overflow: hidden;
    }

    .sidenav {
        height: 100%;
        right: 0;
        width: 50%;
        position: absolute;
        z-index: 1;
        overflow-x: hidden;
        transition: 0.8s;
        transition-timing-function: ease-in;
        box-sizing: border-box;
        padding: 72px 48px 0;
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        transform: translateX(100%);
        top: 0;
    }

    .hideSidebar {
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

    select {
        padding: 4px 8px;
    }

    .infoPageImg {
        width: 800px;
        height: 800px;
        background-size: cover;
    }
    .page_two_columns{
        display: flex;
        justify-content: space-between
    }
    .styledBtn{
        border-radius: 4px;
        border: solid 1px #c8cccf;
        background-color: #ffffff;
        margin-left: 7px;
        padding: 0 16px;
        color: #4a5056;
        font-size: 14px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: .1rem;
        text-decoration: none;
    }
    .descriptionMargin{
        margin-top:25vh;
        margin-left: 15vh;
    }

</style>
