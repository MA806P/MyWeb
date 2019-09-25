<template>

  <div>
    name: {{ name || "--"}}
    <br/>
    <input :value = "name" @change="handleChange" />
    <br/>
    <div @click = "handleDivClick">
      <button @click = "handleClick">重置成功</button>
      <button @click.stop = "handleClick">重置失败</button>
    </div>
  </div>

</template>


<script>

  export default {
    name: "EventDemo",
    props: {
      name: String
    },
    methods: {
      handleChange(e) {
        console.log('event handle change');
        this.$emit("childEvent", e.target.value);
      },
      handleDivClick() {
        console.log('event handle div');
        this.$emit("childEvent", "");
      },
      handleClick(e) {
        console.log("event handle click");
        // 都会失败
        e.stopPropagation();
      }
    },

  }
</script>
