import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vs from 'vue-resource'
import Element_ui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Router);
Vue.use(Vs);
Vue.use(Element_ui);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
