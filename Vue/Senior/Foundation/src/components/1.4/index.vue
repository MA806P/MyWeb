<template>
  <div>
    <p>
      <button @click="handleNameChange">change this.name</button>
      <button @click="handleInfoChange">change this.info</button>
      <button @click="handleListChange">change this.list</button>
    </p>

    <PropsAndData :name="name" :info="info" :list="list"/>

    <br/>
    <br/>

    <p>

      vue 数据驱动视图框架，DOM 是通过数据来映射的，数据改变的时候 视图 才会改变。没有特殊情况，不要去操作 DOM 。
      <br/>
      <br/>
      数据来源（单向的），来自父元素的属性 props，来自组件自身的状态 data，来自状态管理器 vuex Vue.observable.
      状态 data 和 属性 props 的改变未必会触发更新。
      <br/>
      <br/>
      vue 的响应式更新，vue 在初始化时会对 data 中的数据进行 setter getter 的转化，相当于做了一层代理层，在存取数据会经过代理层。在组件渲染的时候，用到 data 里的数据，就会把数据放到 watcher 里面，只有在 watcher 里面的数据修改了，才会触发组件的更新。
      <br/>
      <br/>
      思考： 数组有哪些方法支持响应式更新，如不支持如何处理，底层原理如何实现？
      <br/>
      支持的：push pop shift unshift splice sort reverse
      不支持： filter concat slice
      原理同样使用 Object.defineProperty 对数组方法进行改写

    </p>
  </div>
</template>

<script>
  import PropsAndData from "./PropsAndData"
  let name = "world"
  export default {
    components: {
      PropsAndData
    },

    data() {
      this.name = name;
      return {
        //name: "name",
        info: {},
        //info: { number: undefined },

        list: []
      };
    },

    methods: {
      handleNameChange() {
        //这时不会触发更新，name没有做响应式
        //要是 name 写在 data return 里就会触发，会加到响应式更新
        this.name = "vue" + Date.now();
        console.log("this.name change ", this.name);
      },
      handleInfoChange() {

        //这个响应式只是 info，info 对象下面的没有做响应式
        //要是改成 info: { number: undefined }, 就会触发
        this.info.number = 1;
        console.log("this.info change ", this.info);
      },
      handleListChange() {
        this.list.push(1, 2, 3);
        console.log("this.list change ", this.list);
      },
    }
  }
</script>
