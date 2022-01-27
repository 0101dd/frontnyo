import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '書畫齋',
      transition: 'fade-in-down'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊｜書畫齋',
      transition: 'overlay-down-full'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入｜書畫齋',
      transition: 'overlay-down-full'
    }
  },
  {
    path: '/maobi',
    name: 'Maobi',
    component: () => import(/* webpackChunkName: "maobi" */ '../views/Maobi.vue'),
    meta: {
      title: '毛筆介紹｜書畫齋',
      transition: 'overlay-down-full'
    }
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue'),
    meta: {
      title: '精選字帖｜書畫齋',
      transition: 'overlay-left-right'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
})
export default router
