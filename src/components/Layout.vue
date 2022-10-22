<template>
    <div class="wrapper">
        <div class="head">
            <div @click="handleCollapse">按钮</div>
            <div>头部</div>
        </div>
        <div class="content">
            <div class="nav">
                <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo menu" default-active="2" text-color="#fff" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <Location />
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="第一组">
                            <el-menu-item index="1-1">c</el-menu-item>
                            <el-menu-item index="1-2">d</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">e</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>f</template>
                            <el-menu-item index="1-4-1" @click="handleClkG">g</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2" @click="handleClk">
                        <el-icon>
                            <icon-menu />
                        </el-icon>
                        <template #title>a</template>
                    </el-menu-item>
                    <el-menu-item index="3" @click="handleClkB">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <template #title>b</template>
                    </el-menu-item>
                    <el-menu-item index="4" @click="handleClkFour">
                        <el-icon>
                            <histogram />
                        </el-icon>
                        <template #title>four</template>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="right">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        toRefs,
        onMounted
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
        Histogram,
    } from '@element-plus/icons-vue'
    import axios from 'axios'
    export default {
        name: 'Layout',
        components: {
            Document,
            IconMenu,
            Location,
            Setting,
            Histogram,
        },
        setup() {
            const state = reactive({
                showList: false,
                isCollapse: false,
            })
            const router = useRouter()
            onMounted(function() {
                axios.post('/api/login').then(res => {
                    console.log(res, 1212)
                })
            })

            function handleOrder() {
                state.showList = !state.showList
            }

            function handleClk() {
                router.push('/a')
            }

            function handleClkB() {
                router.push('/b')
            }

            function handleClkG() {
                router.push('/f/g')
            }

            function handleClkFour() {
                router.push('/four');
            }

            function handleCollapse() {
                state.isCollapse = !state.isCollapse
            }
            return {
                handleOrder,
                handleClk,
                handleClkB,
                handleClkG,
                handleClkFour,
                handleCollapse,
                ...toRefs(state),
            }
        },
    }
</script>

<style lang="less" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .content {
        display: flex;
        flex: 1;
        flex-direction: row;
        overflow: auto;
    }

    .head {
        background: red;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav {
        width: 200px;
    }

    .menu {
        height: 100%;
    }

    .right {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>