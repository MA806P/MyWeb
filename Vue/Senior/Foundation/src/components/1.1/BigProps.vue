<template>
  <div>
    {{ name }}
    <br/>

    <button @click="handleChange"> change name </button>
    <br/>

    <!--插槽的内容通过属性来传递-->
    <!--{{ slotDefault }} 通过下面函数式子件来解析内容-->
    <VNodes :vnodes="slotDefault" />
    <br/>
    <VNodes :vnodes="slotTitle" />
    <br/>
    <VNodes :vnodes="slotScopeItem({ valueKey: 'hello vue' })" />
    <br/>

  </div>
</template>

<script>
  export default {
    name: "BigProps",
    components: {
      VNodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes
      }
    },

    props: {
      name: String,
      onChangeBig: {
        type: Function,
        default: () => {}
      },

      slotDefault: Array,
      slotTitle: Array,
      slotScopeItem: {
        type: Function,
        default: () => {}
      },
    },


    methods: {
      handleChange() {
        this.onChangeBig("Hello !!!");
      }
    },
  }
</script>
