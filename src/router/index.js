import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/router/Login'
import Home from '@/router/Home'
import Sort from '@/router/Sort'

Vue.use(Router)

const routes = [].concat(Login, Home, Sort)

export default new Router({
  mode: 'history',
  routes
})
