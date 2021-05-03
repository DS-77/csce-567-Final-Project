import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import HelloWorld from '../components/HelloWorld'
import DataTable from '../components/DataTable'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },{
        path: '/data',
        name: 'DataTable',
        component: DataTable
    }
  ]
  
  const router = new VueRouter({
    routes
  })
  
  export default router