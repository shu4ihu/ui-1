<template>
    <div>
        <Switch :value="y" @changeValue="changeValue"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const y = ref(false)
const changeValue = (sonValue)=>{
    y.value = sonValue
}
</script>