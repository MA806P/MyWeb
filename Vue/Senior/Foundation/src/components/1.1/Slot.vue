<template>
  <div>
    <slot />
    <slot name="title" />
    <slot name="item" v-bind="{ valueKey: 'vue hello' }" />
  </div>
</template>

<script>
  export default {
    name: "SlotDemo"
  };
</script>
