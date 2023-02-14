<template>
    <div>
        <Topnav/>
        <section class="content">
            <h1>My UI</h1>
            <h1>一个自用的UI框架</h1>
            <p class="action">
                <a href="#">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </section>
    </div>
</template>

<script lang="ts" setup>
import Topnav from "../components/Topnav.vue"
</script>

<style lang="scss" scoped>
.content{
    padding-top: 80px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightblue;
    .action{
        padding: 8px 0;
        a{
            margin: 0 8px;
            background-color: #fff;
            display: inline-block;
            $h:28px;
            height:$h;
            line-height: $h;
            border-radius: calc($h/2);
            padding: 0 8px;
        }
    }
}
</style>