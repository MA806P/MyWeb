 <template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{msg}}
    <div>
      <input type="text" v-model="info">
      <button v-on:click="handleClick">添加</button>
    </div>
    <ul>
      <!-- <li v-for='item in list'>{{item}}</li> -->
      <todo-item v-for="item in list" :key="item">
        <template v-slot:item='itemProps'>
          <span :style="{fontSize: '20px', color: itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
        </template>
      </todo-item>
    </ul>



    <router-link to="/account">account</router-link>
    <router-link to="/goodslist">goodslist</router-link>
    <router-view></router-view>


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "app",

  //???? data ??? function
  data() {
    return {
      msg: "hello vue",
      info: "",
      list: []
    };
  },

  methods: {
    handleClick() {
      this.list.push(this.info);
      this.info = "";
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
