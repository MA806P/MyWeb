<template>
  <div>
    info: {{ info }}
    <input :value="info.name" @input="handleChange" />
  </div>
</template>

<script>
  export default {
    props: {
      info: Object
    },

    created() {
      // this.temp = { name: "" };
      // Object.keys(this.temp).forEach(key => {
      //   proxy(this.info, this.temp, key);
      // });
    },

    methods: {

      handleChange(e) {
        console.log(e + '---' + e.target.value);
        this.info.name = e.target.value;
        this.$forceUpdate();
        //this.$emit("change", e.target.value);
      }
    }
  }
</script>
