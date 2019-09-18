import Vue from 'vue'
import App from './App.vue'
import router from './js/router'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')




// import m1, { title1 } from './js/test.js'
// console.log(m1); //{name: "name1", age: 20}
// console.log(title1);