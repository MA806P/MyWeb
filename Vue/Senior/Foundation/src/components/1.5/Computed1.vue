<template>
  <div>
    {{ fullName }}

    <div>firstName: <input v-model="firstName"/></div>
    <div>lastName: <input v-model="lastName"/></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: "Foo",
        lastName: "Bar"
      };
    },

    computed: {
      fullName: function () {
        return this.firstName + " " + this.lastName;
      }
    },

    watch: {
      fullName: function (val, oldVal) {
        console.log("new：%s, old: %s", val, oldVal);
      }
    }
  }
</script>
