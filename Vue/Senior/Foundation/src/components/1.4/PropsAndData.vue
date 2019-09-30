<template>
  <div>
    <p>props.info: {{ info }}</p>
    <p>props.name: {{ name }}</p>
    <p>props.list: {{ list }}</p>
    <p>data.a: {{ a }} </p>
    <p>
      <button @click="handleBChange">change data.b</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "PropsAndData",
    props: {
      info: Object,
      name: String,
      list: Array
    },
    data() {
      return {
        a: "hello",
        b: "vue"
      };
    },
    updated() {
      console.log("trigger children updated");
    },
    methods: {
      handleBChange() {
        this.b = "vue" + Date.now();
        // b 没有在模板中用到，所以不会触发 updated
        console.log("data.b changed, not trigger components update", this.b);
      }
    }
  }
</script>
