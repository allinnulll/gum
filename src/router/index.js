import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/router/Login'
import Home from '@/router/Home'
import Book from '@/router/Book'

Vue.use(Router)

const routes = [].concat(Login, Home, Book)

export default new Router({
  mode: 'history',
  routes
})
