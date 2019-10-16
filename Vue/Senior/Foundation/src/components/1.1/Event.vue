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
        //this.$emit("childEvent", e.target.value);

        //思考：this.$emit 触发事件，返回值是什么，上层组件有返回值，能不能接收到
        // this.$emit 返回值 this
        const  res = this.$emit("childEvent", e.target.value, val => {
          console.log('this.$emit back -- ' + val); //hello
        });
        console.log(res, res === this); // VueComponent  true


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
