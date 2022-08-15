import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Main from "../views/Main";
import MemberLevel from "../views/members/MemberLevel"
import MemberList from "../views/members/MemberList"
import NotFound from "../views/NotFound"
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/main/:name',
    name:'Main',
    component:Main,
     children:[
      {
        path: 'members/level',
        name: 'MemberLevel',
        component: MemberLevel,
        
      },
      
      {
        path: 'members/list/:id',
        name: 'MemberList',
        component: MemberList,
        props:true
      },
    ]
  },
  {
    path:'/goMain/:name',
    name:'GoMain',
    redirect:'/main/:name'
  },
    //40440404040404040404040404040404040404
  {
    path:'*',
    name:'NotFound',
    component:NotFound
  } 
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
