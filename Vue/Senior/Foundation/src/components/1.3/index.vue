<template>
  <div>
    <a-tabs>
      <a-tab-pane key="ChildrenA1" tab="1 移动">
        <ChildrenA1/>
      </a-tab-pane>

      <a-tab-pane key="ChildrenA2" tab="2 删除新建">
        <ChildrenA2/>
      </a-tab-pane>

      <a-tab-pane key="ChildrenA3" tab="3 删除新建">
        <ChildrenA3/>
      </a-tab-pane>

      <a-tab-pane key="ChildrenA4" tab="4 更新新建 无key">
        <ChildrenA4/>
      </a-tab-pane>

      <a-tab-pane key="ChildrenA5" tab="5 移动 有key">
        <ChildrenA5/>
      </a-tab-pane>

      <a-tab-pane key="ChildrenA6" tab="6 更新 无key">
        <ChildrenA6/>
      </a-tab-pane>

      <a-tab-pane key="ChildrenA7" tab="7 插入 有key">
        <ChildrenA7/>
      </a-tab-pane>



      <a-tab-pane key="PChildrenA1" tab="练习-index Key">
        <PChildrenA1 />
      </a-tab-pane>
      <a-tab-pane key="PChildrenA2" tab="练习-静态 Key">
        <PChildrenA2 />
      </a-tab-pane>

    </a-tabs>



    <br/>
    <br/>

    <p>
      JQuery 帮助简化了操作 DOM 的 API ，很容易给 DOM 绑定事件，通过事件操作 DOM。
      但是随着系统越来越复杂，事件越来越多，每次通过事件操作 DOM 变的越来越小心。这些痛点造就了 React Vue 的诞生。
      <br/>
      通过引入一个数据中间层，事件不在直接操作 DOM ，通过事件直接改变数据，数据再去映射到真实的 DOM ，这是是 Vue 底层直接处理，我们不在直接去操作 DOM ，数据的更新导致 DOM 的更新。
      如何尽可能的高效操作 DOM ，操作 DOM 是非常耗性能，为了用户体验，当数据更新的时候，要尽可能的去复用 DOM ，这就引入了虚拟 DOM 机制，
      <br/>
      数据+模板=类似DOM的数据结构
      <br/>
      在数据结构中保留 DOM 的一些信息，类型、属性、事件，数据更新之后会生成一个新的数据结构，前后的数据结构通过算法对比，查找出需要更新的结点，尽可能复用 DOM 提升性能。
      <br/>
      查找两棵树的差别，时间复杂度 O(n3)，性能差不能接受，前端页面结构很少跨层级移动结点，引入新算法，只比对同层结点。
      <br/>
      引入 Key 可以比对更新，而不是删除后新建。
      key 可以帮助提升算法比较的性能


      <br/>
      <br/>
      为何不能使用 index 作为 key ?
      开发中经常使用数组 v-for 生成子节点，使用 index 作为 key 会有bug。
    </p>

  </div>
</template>

<script>
  import ChildrenA1 from "./ChildrenA1"
  import ChildrenA2 from "./ChildrenA2"
  import ChildrenA3 from "./ChildrenA3"
  import ChildrenA4 from "./ChildrenA4"
  import ChildrenA5 from "./ChildrenA5"
  import ChildrenA6 from "./ChildrenA6"
  import ChildrenA7 from "./ChildrenA7"

  import PChildrenA1 from "./PChildrenA1"
  import PChildrenA2 from "./PChildrenA2"

  export default {
    components: {
      ChildrenA1,
      ChildrenA2,
      ChildrenA3,
      ChildrenA4,
      ChildrenA5,
      ChildrenA6,
      ChildrenA7,

      PChildrenA1,
      PChildrenA2
    },
  };
</script>


<style>
  .border,
  .border1,
  .border2 {
    border: 1px solid #000;
    padding: 10px 0;
    margin: 10px 10px 0;
  }

  .border1 {
    border-color: #ccc;
  }

  .border2 {
    border-color: #eee;
  }
</style>
