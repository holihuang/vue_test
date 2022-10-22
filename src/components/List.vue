<template>
  <div>
    <h3>list</h3>
    <el-input class="ipt" v-model="ipt" placeholder="Please input" />
    <el-button>这是默认button</el-button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'List',
    setup() {
        const state = reactive({
            ipt: ''
        })
        return {
            ...toRefs(state),
        }
    },
}
</script>

<style lang="less" scoped>
.ipt {
    width: 200px;
}
</style>