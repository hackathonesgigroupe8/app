<template>
    <div>
        <nav>
            <img src="../assets/logo.svg" alt="logo">
            <div>
                <router-link to="/map">Map</router-link>
                <router-link to="/services">Services</router-link>
                <router-link to="/platform">Platform</router-link>
                <select class="select">
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                </select>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        align-content: stretch;
        width: 100%;
        height: 80px;
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.11);
        background-color: #ffffff;
        position: sticky;
        top: 0;
        padding: 0 24px;
        z-index: 10;
        box-sizing: border-box;
        border-bottom: solid 1px #DEE1E4
    }

    nav > img {

        display: inline-block;
        height: 24px;
        margin-top: 28px;
    }

    nav > div {
        align-content: flex-end;
        justify-content: flex-end;
        min-width: 40vw;
        display: flex;
    }

    nav > div > a, nav > div > select {
        height: 80px;
        vertical-align: center;
        padding: 0 24px;
    }
    nav > div > select{
        border: none;
        margin-right: 24px
    }
    nav > div > a {
        line-height: 80px;
        color: #464B51;
        text-decoration: none;
        font-weight: 500;
        text-align: center;
        transition-duration: .2s ;
    }
    nav > div > a:hover{
        color: #464B51;
        border-bottom: solid 3px #AA8F72;
    }

</style>