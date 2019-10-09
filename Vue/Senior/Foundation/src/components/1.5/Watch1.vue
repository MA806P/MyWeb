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
        lastName: "Bar",
        fullName: "Foo Bar"
      };
    },

    watch: {
      firstName: function (val, oldVal) {
        console.log("firstName new：%s, old: %s", val, oldVal);
        this.fullName = val + " " + this.lastName;
      },
      lastName: function (val, oldVal) {
        console.log("lastName new：%s, old: %s", val, oldVal);
        this.fullName = this.firstName + " " + val;
      }
    }
  }
</script>
