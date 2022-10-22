<template>
    <h4>这是一个g component</h4>
    <div>
        {{data.count}}
        <button @click="handleClk">+</button>
    </div>
</template>

<script>
    import {
        useStore
    } from 'vuex'
    export default {
        setup() {
            const store = useStore()
            const data = store.state.g
            console.log(store, 999)

            function handleClk() {
                store.commit('g/add')
            }
            return {
                data,
                handleClk,
            }
        }
    }
</script>

<style>

</style>