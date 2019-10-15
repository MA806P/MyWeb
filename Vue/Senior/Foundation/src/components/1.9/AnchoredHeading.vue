<template>
  <div>
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
  </div>
</template>

<script>

  export default {
    props: {
      level: {
        type: Number,
        default: 1
      }
    }
  }
</script>
