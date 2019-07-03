<template>
    <div>
        <h1>this is account</h1>

        <router-link to="/account/login">login</router-link>
            <router-link to="/account/register">register</router-link>
            <router-view></router-view>
    </div>
</template>


<script>

</script>


<style scoped>
/* 只要 style 标签是在 .vue 组件中定义的，推荐都为 style 开启 scoped 属性 */
div {
    color: red;
}

</style>
