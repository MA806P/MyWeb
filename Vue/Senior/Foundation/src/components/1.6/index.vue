<template>
  <div>

    <a-tabs>

      <a-tab-pane key="clock" tab="时钟">
        <button @click="destroyClock = !destroyClock">
          {{ destroyClock ? "加载时钟" : "销毁时钟" }}
        </button>
        <Clock v-if="!destroyClock" />
      </a-tab-pane>


      <a-tab-pane key="Functional" tab="函数式组件">
        <Functional :name="name" />
        <TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'hello vue' : 'hello world'"
        >
          <!--临时变量-->
          <template v-slot="{ var1, var2 }">
            {{ var1 }}
            {{ var2 }}
          </template>
        </TempVar>
      </a-tab-pane>


      <a-tab-pane key="spike" tab="秒杀例子">
        <Spike :start-time="startTime" :end-time="endTime" />
      </a-tab-pane>

    </a-tabs>


    <br/>
    <br/>
    <p>
      生命周期
      vue 组件创建的时候，都会经历一系列的初始化过程。
      数据更新、销毁的时候，都会提供一些钩子函数，帮助我们执行一系列操作。
    </p>
    <br/>
    <p>
      函数式组件：functional: true ，无状态 无实例 没有this上下文、生命周期。<br/>
      相当于一个简单的方法。
      借助函数式组件，在模板中做临时变量
    </p>


  </div>
</template>

<script>
  import Clock from "./Clock"
  import Functional from "./Functional"
  import TempVar from "./TempVar"
  import Spike from "./Spike"
  import moment from "moment"

  export  default {
    components: {
      Clock,
      Functional,
      TempVar,
      Spike
    },

    data() {
      return {
        destroyClock: false,
        name: "vue",

        startTime: moment("2019-10-10 11:30:00"),
        endTime: moment("2019-10-10 11:31:00")
      };
    }
  }
</script>
