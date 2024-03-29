import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/1.1",
      name: "Three Part",
      component: () =>
        import ("./components/1.1")
    },
    {
      path: "/1.2",
      name: "VM",
      component: () =>
        import ("./components/1.2")
    },
    {
      path: "/1.3",
      name: "Node",
      component: () =>
        import ("./components/1.3")
    },
    {
      path: "/1.4",
      name: "Update",
      component: () =>
        import ("./components/1.4")
    },
    {
      path: "/1.5",
      name: "Computed",
      component: () =>
        import ("./components/1.5")
    },
    {
      path: "/1.6",
      name: "LifeCycle",
      component: () =>
        import ("./components/1.6")
    },
    {
      path: "/1.7",
      name: "Directives",
      component: () =>
        import ("./components/1.7")
    },
    {
      path: "/1.8",
      name: "Communication",
      component: () =>
        import ("./components/1.8")
    },
    {
      path: "/1.9",
      name: "TemplateJSX",
      component: () =>
        import ("./components/1.9")
    }
  ]
})
