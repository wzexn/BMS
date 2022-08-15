import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.axios = axios;
Vue.use(Vuex);

//判断
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');

  if (to.path == '/logout') {

    sessionStorage.clear();

    next({ path: '/login' });
  } else if (to.path == 'login') {
    if (isLogin != null) {
      next({ path: '/main' })
    }
  } else if (isLogin == null) {
    next({ path: '/login' });
    }else{
      next()
    }
  }
)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
