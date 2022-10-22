<template>
    <div>
        <div>
            message is: <input />
        </div>
        <div>
            <h4>这是props</h4>
            {{data.count}}
            <button @click="handleClk">+</button>
            <button @click="handleAddAsync">async +</button>
        </div>
        <div>
            <h4>这是state</h4>
            {{num}}
            <button @click="handleNum">+</button>
        </div>
        <Son :num="num" @d="d" />
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Son from './Son.vue'
export default {
    name: 'ComB',
    components: {
        Son,
    },
    setup() {
        const store = useStore()
        const state = reactive({
            num: 0,
        })
        const data = store.state
        function handleClk() {
            store.commit('add', {a: 1})
        }
        function handleAddAsync() {
            store.dispatch('addAsync')
        }
        function handleNum() {
            state.num++;
        }
        function d() {
            handleNum()
        }
        return {
            data,
            ...toRefs(state),
            handleClk,
            handleAddAsync,
            handleNum,
            d,
        }
    },
}
</script>
<style scoped>

</style>
