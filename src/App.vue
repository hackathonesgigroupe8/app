<template>

    <nav>
        <img src="" alt="logo">
        <select>
            <option value="en">EN</option>
            <option value="fr">FR</option>
        </select>
        <a href="#">Sources</a>
        <a href="#">About</a>
    </nav>

</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
            message:  "test"

            }
        }
    }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
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

</style>
