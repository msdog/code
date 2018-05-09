import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home"
import HelloWorld from '../components/HelloWorld'
import SideMenu from '../components/SideMenu'
import carousel from '../components/carousel'
import user from '../components/users'
import tb from '../components/tb'
import main from '../components/viewMain'



Vue.use(Router)

export default new Router({
    routes: [
      {
        name:'homes',
        path: '/',
        component: main,
        children: [ { path: '/home', component: home, name: 'home' }, 
          { path: '/homess', component: carousel, name: 'homess' },
          { path: '/tb', component: tb, name: 'tb' }
        ]
      },
      {
        name:'carousels',
        path: '/carousel',//指的是:8080/helloworld
        component: main,
        children: [{ path: '/carousel', component: carousel, name: 'carousel' }]
      },
      {
        name:'users',
        path: '/user',//指的是:8080/helloworld
        component: main,
        children: [{ path: '/user', component: user, name: 'user' }]
        
      },
      {
        name:'hellos',
        path: '/HelloWorld',//指的是:8080/helloworld
        component: main,
        children: [{ path: '/hello', component: HelloWorld ,name:'hello'}]
      },
      {
        name:'SideMenus',
        path: '/SideMenu',//指的是:8080/helloworld
        component: main,
        children: [{ path: '/SideMenu', component: SideMenu, name:'SideMenu'}]
      },
    ],
    mode:"history",//去:8080/#/的#号
})
