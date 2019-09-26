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

              <br/>
              <br/>
              <Proxy :info="proxyInfo" @change="proxyHandleChange"/>
            </a-tab-pane>



            <a-tab-pane tab="事件" key="event">
              <Event :name="name" @childEvent="handleEventChange" />
            </a-tab-pane>



            <a-tab-pane tab="插槽" key="slot">

              <!--思考：相同名称的插槽是合并还是替换？ -->
              <SlotDemo>
                <p>default slot</p>
                <p slot="title">this slot title</p>
                <p slot="item" slot-scope="props">this item slot-scope {{ props }}</p>
              </SlotDemo>

              <SlotDemo>
                <p>new default slot</p>
                <template v-slot:title>
                  <p>new this slot title</p>
                </template>
                <template v-slot:item="newprops">
                  <p>new this item slot-scope {{ newprops }}</p>
                </template>
              </SlotDemo>
            </a-tab-pane>



            <a-tab-pane tab="大属性" key="bigProps">
              <BigProps
                :name="bigPropsName"
                :on-change-big="handleBigPropChange"
                :slot-default="getDefault()"
                :slot-title="getTitle()"
                :slot-scope-item="getItem"
              />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>


<script>
import Props from "./Props"
import Event from "./Event"
import Slot from "./Slot"
import BigProps from "./BigProps"
import Proxy from "./Proxy.vue"
export default {
    components: {
      Proxy,
      Props,
      Event,
      SlotDemo: Slot,
      BigProps,
    },
    data: ()=> {
        return {
            name: "",
            type: "success",
            bigPropsName: "Hello world!",

          proxyInfo: {}
        };
    },

    methods: {
        handlePropChange(val) {

          // 子组件 Props 里的 button 点击会调用子组件里的方法 handleClick
          // 子组件里的方法会调用，值为函数的属性，而在父组件里吧此属性赋值给本函数
          // 所以本函数被调用，改变了 type 的值
          // console.log('this val = ' + val);
          this.type = val;
        },

      handleEventChange(val, callBack) {
          // 子组件把事件赋值给了父组件中的本方法
          // 在子组件中通过 this.$emit("childEvent", val); 调用
          // console.log('this val = ' + val);
          this.name = val;

          //子组件通过 this.$emit 来触发上层的方法
          //如果有返回值，子组件能不能接收到
          callBack("hello");
          return "hello";
      },

      handleBigPropChange(val) {
          this.bigPropsName = val;
      },
      getDefault() {
          return [ this.$createElement("p", "default slot") ];
      },

      getTitle() {
        return [
          this.$createElement("p", "title slot1"),
          this.$createElement("p", "title slot2")
        ];
      },

      getItem(props) {
        return [ this.$createElement("p", `item slot-scope ${JSON.stringify(props)}`)];
      },


      proxyHandleChange(val) {
        window.isUpdatingChildComponent = true;
        //this.proxyInfo.name = val;
        this.proxyInfo = { name: val };
      }
    }
}
</script>

