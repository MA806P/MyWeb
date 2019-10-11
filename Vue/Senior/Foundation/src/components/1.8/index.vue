<template>
  <div>

    <br/>
    <p>
      开发底层通用组件时，常用高级特性 provide、inject
      <br/>
      组件之间通信。
      父节点A 要跟子节点B 通信，通过属性传递。
      <br/>
      子节点B 要跟父节点A 通信，通过this.$emit触发事件进行传递。
      <br/>
      <br/>
      如果跨节点通信，需要层层传递，成本高，没有健壮性脆弱。
      <br/>
      provide 就是为了解决这个问题而诞生的。provide 提供数据，inject 注入数据。
      节点层层冒泡去取数据
    </p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
