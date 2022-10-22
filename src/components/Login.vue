<template>
    <div class="wrapper">
        <div>账号</div>
        <div>密码</div>
        <button @click="handleLogin">login</button>
    </div>
</template>
<script>
    import {
        onMounted
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'
    export default {
        name: 'Login',
        setup() {
            const router = useRouter()

            function handleLogin() {
                router.push('/')
            }
            onMounted(function() {
                console.log(process.env.VUE_APP_ENV, process.env.NODE_ENV, 99)
                // console.log(process.env.VUE_APP_BASE_URL, 'login...')
            })
            return {
                handleLogin,
            }
        },
    }
</script>
<style lang="less" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>