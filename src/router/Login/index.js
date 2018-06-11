// 路由按需加载，同一webpackChunkName会被合并进同一个js文件
const Login = () => import(/* webpackChunkName: "login" */ '@/components/Login')

export default [
  {
    path: '/login',
    name: 'Login_login',
    component: Login
  }
]
