import Home from '@/pages/Home'
import User from '@/components/User'
import SideNav from '@/components/SideNav'

export default [
  {
    path: '/',
    redirect: () => {
      // 判断登录态
      let loginIn = false
      if (loginIn) return {name: 'Login_login'}
      else { return {name: 'Home_home'} }
    }
  },
  {
    path: '/home',
    name: 'Home_home',
    component: Home,
    redirect: {name: 'Home_sideNav'},
    children: [
      {
        path: '',
        name: 'Home_sideNav',
        components: {
          default: User,
          sideNav: SideNav
        }
      },
      {
        path: 'user',
        name: 'Home_user',
        component: User
      }
    ]
  }
]
