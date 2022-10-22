<template>
    <div>
        count: {{count}}
        <button @click="handleClk">+</button>
        <div>
            <div>这是其中一个子组件 --in a--</div>
            <Child>
                <template v-slot:one="slotone">
                    {{slotone}}
                </template>
                <template v-slot:default="slottwo">
                    {{slottwo}}
                </template>
            </Child>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import Child from './Child.vue'

export default {
    name: 'ComA',
    components: {
        Child,
    },
    setup() {
        const state = reactive({
            count: 0,
        })
        function handleClk() {
            state.count++
        }
        return {
            handleClk,
            ...toRefs(state)
        }
    },
}
</script>
<style scoped>

</style>
