<template>
    <div id="nav">
      <p>this is test</p>

      <router-link :to="'/1.1'">1.1 三大模块</router-link>
      <br/>
      <router-link :to="'/1.2'">1.2 单向数据流</router-link>
      <br/>
      <router-link :to="'/1.3'">1.3 虚拟DOM、Key属性的作用</router-link>
      <br/>
      <router-link :to="'/1.4'">1.4 触发组件更新</router-link>
      <br/>
      <router-link :to="'/1.5'">1.5 计算属性、监听器</router-link>
      <br/>
      <router-link :to="'/1.6'">1.6 生命周期、函数式组件</router-link>
      <br/>
      <router-link :to="'/1.7'">1.7 指令</router-link>
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
