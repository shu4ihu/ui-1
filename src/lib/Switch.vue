<template>
    <div>
        <button @click="toggle" :class="{checked:value}"><span></span></button>
    </div>
</template>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        height: $h;
        width: $h*2;
        border: none;
        background-color: grey;
        border-radius: calc($h/2);
        position: relative;
        span{
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background-color: white;
            border-radius: calc($h2/2);
            transition: left 250ms;
        }   
        &.checked{
            background-color:cadetblue; 
            > span{
                left: calc(100% - #{$h2} - 2px);
            }
        }
        &:focus{
            outline: none;
        }
    }
</style>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
    value:Boolean
})
const emit = defineEmits(['update:value'])
const toggle = () =>{
    emit('update:value',!props.value)
}
</script>