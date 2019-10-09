<template>
  <div>
    <a-tabs>
      <a-tab-pane key="Computed" tab="计算属性">
        <Computed></Computed>
      </a-tab-pane>

      <a-tab-pane key="Watch" tab="监听器">
        <Watch />
      </a-tab-pane>

      <a-tab-pane key="vs" tab="计算属性 vs 监听器">
        <Computed1 />
        <br/>
        <br/>
        <Watch1 />
      </a-tab-pane>

      <a-tab-pane key="WatchPro" tab="节流">
        <WatchPro />
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
    <p>
      computed 能做的 watch 都能做，反之不行。能用 computed 的尽量用 computed
    </p>
    <br/>
    <p>
      节流，直到用户停止输入超过 500毫秒后，才更新 fullName
    </p>
    <br/>
  </div>
</template>

<script>
  import Computed from "./Computed"
  import Watch from "./Watch"
  import Computed1 from "./Computed1"
  import Watch1 from "./Watch1"
  import WatchPro from "./Watch1_pro"

  export  default {
    components: {
      Computed,
      Watch,
      Computed1,
      Watch1,
      WatchPro
    }
  }
</script>
