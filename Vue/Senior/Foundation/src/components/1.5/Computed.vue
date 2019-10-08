<template>
  <div>
    <p>Reversed message1: "{{ reversedMessage1 }}"</p>
    <p>Reversed message2: "{{ reversedMessage2() }}"</p>

    <p>{{ now }}</p>
    <button @click="()=>$forceUpdate()">forceUpdate</button>
    <br/>

    <input v-model="message"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "hello vue"
      };
    },



    computed: {
      //计算属性的 getter
      reversedMessage1: function () {
        console.log("do reverseMessage1");
        return this.message.split("").reverse().join("");
      },

      now: function () {
        return Date.now();
      }
    },

    methods: {
      reversedMessage2: function () {
        console.log("do reverseMessage2");
        return this.message.split("").reverse().join("");
      }
    }
  }
</script>
