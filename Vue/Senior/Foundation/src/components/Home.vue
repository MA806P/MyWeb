<template>
    <div id="nav">
      <p>this is test</p>

      <router-link :to="'/1.1'">1.1 三大模块</router-link>
      <br/>
      <router-link :to="'/1.2'">1.2 单向数据流</router-link>
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
