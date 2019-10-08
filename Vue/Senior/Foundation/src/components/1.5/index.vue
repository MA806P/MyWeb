<template>
  <div>
    <a-tabs>
      <a-tab-pane key="Computed" tab="计算属性">
        <Computed></Computed>
      </a-tab-pane>

      <a-tab-pane key="Watch" tab="监听器">
        <Watch />
      </a-tab-pane>
    </a-tabs>


    <br/>
    <br/>
    <br/>
    <p>
      计算属性 computed：
      减少模板中计算逻辑。
      数据缓存，数据未变，不会再次计算。
      依赖固定的数据类型 响应式数据。
    </p>
    <br/>
    <br/>
    <p>
      监听器 watch：
      更加灵活、通用。
      watch 中可以执行任何逻辑，如函数节流、Ajax 异步获取数据、甚至操作 DOM
    </p>
    <br/>
    <br/>
  </div>
</template>

<script>
  import Computed from "./Computed"
  import Watch from "./Watch"

  export  default {
    components: {
      Computed,
      Watch
    }
  }
</script>
