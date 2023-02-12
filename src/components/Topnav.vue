<template>
    <div class="top_nav">
        <a class="logo">
            <div class="pic" @click="toggleMenu">UI</div>
        </a>
        <ul class="menu">
            <li>
                <a href="#/">博客</a>
            </li>
            <li>
                <a href="#/">GitHub</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.top_nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: auto;
    color: #05538c;
    display: flex;
    padding: 14px;
    justify-content: center;
    align-items: center;
    z-index: 20;
    background: #fff;
    box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
    .logo{
        margin-left: 50px;
        cursor: pointer;
        max-width: 6em;
        margin-right: auto;
        .pic{
            width: 38px;
            height: 38px;
            font-size: 38px;
            font-weight: 1000;
            color: #05538c;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .menu{
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        li{
            margin: 0 1em;
            a{
                color: inherit;
            }
        }
    }
}
</style>

<script lang="ts" setup>
import { inject, Ref } from 'vue';
const asideVisible = inject<Ref<boolean>>('asideVisible')
const toggleMenu =() =>{
    asideVisible!.value = !asideVisible!.value
}
</script>