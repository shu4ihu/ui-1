// 解决问题（.ts文件无法理解.vue文件）
declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const ComponentOptions:ComponentOptions
    export default ComponentOptions
}