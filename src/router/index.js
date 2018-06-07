import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/router/Login'
import Home from '@/router/Home'

Vue.use(Router)

const routes = [].concat(Login, Home)

export default new Router({
  mode: 'history',
  routes
})
