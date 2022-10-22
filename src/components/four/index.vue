<template>
    <div>
        <h4>this is four</h4>
        <div>{{name}}</div>
    </div>
</template>

<script>
    import {
        reactive,
        toRefs,
    } from "vue";

    export default {
        setup() {
            const state = reactive({
                name: 'huang'
            });
            return {
                ...toRefs(state),
            };
        },
    }
</script>

<style lang="less">

</style>