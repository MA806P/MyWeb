<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }"
        v-ant-ref="c => setChildrenRef('childrenE', c)">
      E 节点
    </h3>

    <button @click="handleClick">改变 color = green</button>

  </div>
</template>

<script>
  export default {

    inject: {
      theme: {
        default: () => ({})
      },

      setChildrenRef: {
        default: () => {}
      }
    },

    methods: {

      handleClick() {

        if (this.theme.changeColor) {
          this.theme.changeColor("green");
        }


        /*
        this.theme.color = "green";

        let obj = this.theme;
        var description = "";
        for(var i in obj){
          var property=obj[i];
          description+=i+" = "+property+"\n";
        }
        console.log("11111" + description);
        */

      }

    }

  }
</script>
