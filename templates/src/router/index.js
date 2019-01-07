import Vue from 'vue'
import Router from 'vue-router'
import tablePage from '@/components/tablePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tablePage',
      name: 'tablePage',
      component: tablePage
    }
  ]
})
