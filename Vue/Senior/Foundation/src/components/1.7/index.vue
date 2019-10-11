<template>
  <div>
    <a-tabs>
      <a-tab-pane key="Directives" tab="内置指令">
        <Directives />
      </a-tab-pane>
      <a-tab-pane key="CustomerDirectives" tab="自定义指令">
        <CustomerDirectives />
      </a-tab-pane>
    </a-tabs>

    <br/>
    <br/>
    <p> 思考：组件生命周期和指令生命周期钩子的运行顺序 </p>
    <p> beforeCreate  data  created  beforeMount  render  mounted </p>
    <p> bind  inserted  update  componentUpdated unbind</p>
  </div>
</template>

<script>
  import Directives from "./Directives"
  import CustomerDirectives from "./CustomerDirectives"
  export default {

    components: {
      Directives,
      CustomerDirectives
    }



  }
</script>
