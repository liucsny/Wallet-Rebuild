import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import CreateWallet from '@/components/CreateWallet'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/createwallet',
      name: 'CreateWallet',
      component: CreateWallet
    }
  ]
})
