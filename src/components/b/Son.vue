<template>
  <div>
    <h3>son</h3>
    <div>
        <h4>从父级传递的props</h4>
        <div>{{props.num}}</div>
        <button @click="handleAdd">+</button>
    </div>
    <div>
        <h4>自身state中的数据</h4>
        {{count}}
        <button @click="handleState">+</button>
    </div>
    <div>
        <h4>从store中获取的数据</h4>
        {{data.count}}
        <button @click="handleSonAdd">+</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex'
export default {
    name: 'son',
    props: {
        num: Number,
    },
    setup(props, {emit}) {
        const store = useStore()
        const state = reactive({
            count: 0,
        })
        const data = store.state.son
        console.log(store.state, 8899)
        function handleAdd() {
            emit('d')
        }
        function handleState() {
            state.count++
        }
        function handleSonAdd() {
            store.commit('son/add')
        }
        console.log(props, store, 1234)
        return {
            ...toRefs(state),
            props,
            data,
            handleAdd,
            handleState,
            handleSonAdd,
        }
    }
}
</script>

<style lang="less" scoped>

</style>