import VueRouter from 'vue-router'
import account from '../components/Account.vue'
import goodslist from '../components/GoodsList.vue'
import login from '../components/Login.vue'
import register from '../components/Register.vue'



var router = new VueRouter({
    routes: [{
            path: '/account',
            component: account,
            children: [{
                path: 'login', //子路由path前面不要/否则以根目录为起点
                component: login
            }, {
                path: 'register',
                component: register
            }]
        },
        { path: '/goodslist', component: goodslist }
    ]
});

export default router