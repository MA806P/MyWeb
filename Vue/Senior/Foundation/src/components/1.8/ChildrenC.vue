<template>
  <div class="border1">
    <h2>C 结点</h2>

    <ChildrenE/>
    <ChildrenF/>
  </div>
</template>

<script>
  import ChildrenE from "./ChildrenE";
  import ChildrenF from "./ChildrenF";
  export default {

    components: {
      ChildrenE,
      ChildrenF
    },

    /*
    provide() {
      // 子节点 E F 在 C 中找到了，就不在往上面找了。类似事件冒泡机制
      return {
        theme: {
          color: "yellow"
        }
      };
    }
    */

  }
</script>
