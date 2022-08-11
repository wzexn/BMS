import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Main from "../views/Main";
import MemberLevel from "../views/members/MemberLevel"
import MemberList from "../views/members/MemberList"
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/main',
    name:'Main',
    component:Main,
     children:[
      {
        path: 'members/level',
        name: 'MemberLevel',
        component: MemberLevel
      },
      
      {
        path: 'members/list',
        name: 'MemberList',
        component: MemberList
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
