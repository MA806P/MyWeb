<template>
  <div class="border2">
    <h3 :style="{ color: theme1.color }">F 节点</h3>

    <button @click="getARef">获取A Ref</button>
    <button @click="getHRef">获取H Ref</button>
  </div>
</template>

<script>
  export default {

    inject: {
      theme1: {
        //theme1 取个别名
        from: "theme",
        default: () => ({})
      },


      getParentRef: {
        from: "getRef",
        default: () => {}
      },
      getParentChildrenRef: {
        from: "getChildrenRef",
        default: () => {}
      }

    },

    methods: {
      getARef() {
        console.log(this.getParentRef());
      },
      getHRef() {
        console.log(this.getParentChildrenRef("childrenH"));
      }
    }

  }
</script>
