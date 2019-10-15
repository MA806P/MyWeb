// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";

import ref from "vue-ref";

Vue.config.productionTip = false

Vue.use(antd);
Vue.use(ref, { name: "ant-ref" })

/* eslint-disable no-new */
/*
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})
*/

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
