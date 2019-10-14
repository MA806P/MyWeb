<template>
  <div class="border">
    <h1>A 节点</h1>
    <p :style=" { color: color} "> AAAAA </p>
    <button @click="() =>  changeColor()">改变 color</button>
    <button @click="getEH3Ref">获取组件E 组件实例 h3</button>
    <ChildrenB/>
    <ChildrenC/>
    <ChildrenD/>

  </div>
</template>

<script>
  import ChildrenB from "./ChildrenB"
  import ChildrenC from "./ChildrenC"
  import ChildrenD from "./ChildrenD"

  import Vue from "vue";

  export default {
    components: {
      ChildrenB,
      ChildrenC,
      ChildrenD
    },


    data() {
      return {
        color: "blue"
      };
    },

    provide() {
      return {
        //theme: { color: this.color } //数据不是响应式的，color 改变了，子节点 color不变

        theme: this, //this 下面挂载了 data provide, 是响应式的
        // 优化如何按需，提供响应式数据 Vue.observable


        setChildrenRef: (name, ref) => {
          this[name] = ref;
        },
        getChildrenRef: name => {
          return this[name];
        },
        getRef: () => {
          return this;
        }

      };
    },


    methods: {
      changeColor(color) {
        if (color) {
          this.color = color;
        } else {
          this.color = this.color === "blue" ? "red" : "blue";
        }
      },


      getEH3Ref() {
        console.log(this.childrenE);
      }

    }

    /*

    provide() {

      // 优化如何按需，提供响应式数据
      this.theme = Vue.observable({
        color: "blue"
      });

      return {
        theme: this.theme
      };

    },

    methods: {
      changeColor(color) {
        if (color) {
          this.theme.color = color;
        } else {
          this.theme.color = this.theme.color === "blue" ? "red" : "blue";
        }

        console.log('aaasdfas' + this.theme.color);
      }
    }
    */


  }
</script>
