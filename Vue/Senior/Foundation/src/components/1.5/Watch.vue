<template>
  <div>
    {{ $data }}
    <br/>

    <button @click="()=>(a += 1)">a+1</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        a: 1,
        b: { c: 2, d: 3 },
        e: { f: { g: 4} },
        h: []
      };
    },

    watch: {
      a: function (val, oldVal) {
        this.b.c += 1;
        console.log("a new: %s, old: %s", val, oldVal);
      },

      "b.c": function (val, oldVal) {
        this.b.d += 1;
        console.log("b.c new: %s, old: %s", val, oldVal);
      },

      "b.d": function (val, oldVal) {
        this.e.f.g += 1;
        console.log("b.d new: %s, old: %s", val, oldVal);
      },

      e: {
        handler: function (val, oldVal) {
          this.h.push('push');
          console.log("e new: %s, old: %s", val, oldVal);
        },
        deep: true
      },

      h(val, oldVal) {
        console.log("h new: %s, old: %s", val, oldVal);
      },
    }
  }
</script>
