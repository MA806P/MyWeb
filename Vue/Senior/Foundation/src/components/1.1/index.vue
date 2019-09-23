<template>
    <div>
        <a-tabs>
            <a-tab-pane tab="属性" key="props">
                <Props
                    name="Hello Vue! "
                    :type="type"
                    :is-visible="false"
                    :on-change="handlePropChange"
                    title="属性Demo"
                    class="test1"
                    :style="{marginTop: '20px'}"
                    style="margin-top: 10px"
                />
            </a-tab-pane>

            <a-tab-pane tab="事件">
              <Event :name="name" @change="handleEventChange" />
            </a-tab-pane>

            <a-tab-pane tab="插槽">
            </a-tab-pane>

            <a-tab-pane tab="大属性">
            </a-tab-pane>
        </a-tabs>
    </div>
</template>


<script>
import Props from "./Props"
import Event from "./Event"
export default {
    components: {
      Props,
      Event,
    },
    data: ()=> {
        return {
            name: "",
            type: "success",
            bigPropsName: "Hello world!"
        };
    },

    methods: {
        handlePropChange(val) {

          // 子组件 Props 里的 button 点击会调用子组件里的方法 handleClick
          // 子组件里的方法会调用，值为函数的属性，而在父组件里吧此属性赋值给本函数
          // 所以本函数被调用，改变了 type 的值
          console.log('this val = ' + val);
          this.type = val;
        },

      handleEventChange() {

      },
    }
}
</script>

