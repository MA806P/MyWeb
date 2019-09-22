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
            //this.type = "warning";
            this.onChange(this.type === "success" ? "" : "success");
        }
    }

}
</script>