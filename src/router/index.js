import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }
  ]
  
  const router = new VueRouter({
    routes
  })
  
  export default router