<template>
  <div class="border2">
    <h2>F 节点</h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    components: {},
    mounted() {
      console.log("F mounted");
    },
    updated() {
      console.log("F updated");
    },
    destroyed() {
      console.log("F destroyed");
    },
  }
</script>
