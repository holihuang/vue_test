<template>
    <div>
        <slot name="one" :value="child1"></slot>
        <div>哈哈，我是来自子组件的内容</div>
        <slot :value="child2"></slot>
        <div>
            <h4>这是child里面的store</h4>
            <div>
                {{data.num}}
                <button @click="handleAdd">+</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        onMounted,
        onUnmounted,
        reactive,
        toRefs,
    } from 'vue'
    import {
        useStore
    } from 'vuex'
    import axios from 'axios'
    export default {
        name: 'Child',
        setup() {
            const store = useStore()
            const state = reactive({
                child1: 'child1',
                child2: 'child2',
            })
            const data = store.state.child
            onMounted(function() {
                axios.post('/api/data/getList').then(res => {
                    console.log(res)
                })
            })
            onUnmounted(function() {
                store.commit('child/clear')
            })

            function handleAdd() {
                store.commit('child/add')
            }
            return {
                ...toRefs(state),
                data,
                handleAdd,
            }
        }
    }
</script>

<style lang="less" scoped>

</style>