<template>
    <div>
        name: {{ name }}
        <br />
        type: {{ type }}
        <br />
        list: {{ list }}
        <br />
        isVisisble: {{ isVisisble }}
        <br />
        <button @click="handleClick">change type</button>
    </div>
</template>


<script>
export default {
    name: "PropsDemo",
    // inheritAttrs: false, //自动挂载title
    // props: ['name', 'type', 'list', 'isVisible'],
    props: {
        name: String,
        type: {
            validator: function(value) {
                //这个值必须匹配下列字符串中的一个‘
                return ["success", "warning", "danger"].includes(value);
            }
        },
        list: {
            type: Array,
            // 对象或数组默认值必须从一个工厂函数获取
            default: () => []
        },
        isVisisble: {
            type: Boolean,
            default: false
        },
        onChange: {
            type: Function,
            default: () => {}
        }
    },

    methods: {
        handleClick() {

          //属性是单向数据流，不能在子组件中修改父组件传递过来的值
          //this.type = "warning";

          // 子组件为何不可以修改父组件传递的prop,
          // 如果修改了，vue 是如何监控到属性的修改并给出警告的

          console.log("Props type = " + this.type);
          this.onChange(this.type === "success" ? "warning" : "success");
        }
    }

}
</script>
