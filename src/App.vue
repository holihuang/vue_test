<template>
    <div class="main">
        <router-view />
    </div>
</template>

<script>
    import {
        reactive,
        ref,
        toRefs,
        provide,
        onMounted
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'
    export default {
        name: 'App',
        components: {},
        setup() {
            let name = ref('黄老师')
            const state = reactive({
                content: 'this is a component',
            })
            const router = useRouter()

            function handleChange() {
                state.content = 'hello'
            }

            function getMsg(payload) {
                console.log(payload, 'trigger from son again...')
            }

            function handleName() {
                name.value = '李老师'
            }
            onMounted(function() {
                console.log(router, 'router...')
                if (document.cookie.includes('login')) {
                    router.push('/')
                } else {
                    router.push('/login')
                }
            })
            provide('name', name)
            return {
                ...toRefs(state),
                handleChange,
                handleName,
                getMsg,
            }
        },
    }
</script>

<style>
    html,
    body {
        height: 100%;
        margin: 0px;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .main {
        display: flex;
        flex: 1;
        flex-direction: columns;
    }
</style>