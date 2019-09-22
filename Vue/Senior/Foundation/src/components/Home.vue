<template>
    <div id="nav">
        <p>this is test</p>

        <router-link :to="'/1.1'">三大模块</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>

#nav {
    padding: 30px;
}
</style>