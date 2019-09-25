<template>
  <div>
    <!--插槽，加载父组件传递过来的组件-->
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
