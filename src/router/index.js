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
      title: '書畫齋'
      // transition: 'fade-in-down'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊｜書畫齋'
      //  transition: 'overlay-down-full'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入｜書畫齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/maobi',
    name: 'Maobi',
    component: () => import(/* webpackChunkName: "maobi" */ '../views/Maobi.vue'),
    meta: {
      title: '毛筆介紹｜書畫齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/mozhi',
    name: 'Mozhi',
    component: () => import(/* webpackChunkName: "mozhi" */ '../views/Mozhi.vue'),
    meta: {
      title: '墨汁介紹｜書畫齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/zhi',
    name: 'Zhi',
    component: () => import(/* webpackChunkName: "zhi" */ '../views/Zhi.vue'),
    meta: {
      title: '紙類介紹｜書畫齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/xuexi',
    name: 'Xuexi',
    component: () => import(/* webpackChunkName: "xuexi" */ '../views/Xuexi.vue'),
    meta: {
      title: '學習方法｜書畫齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue'),
    meta: {
      title: '精選字帖｜書畫齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/shupu',
    name: 'Shupu',
    component: () => import(/* webpackChunkName: "shupu" */ '../views/Shupu.vue'),
    meta: {
      title: '書譜｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/zixutie',
    name: 'Zixutie',
    component: () => import(/* webpackChunkName: "zixutie" */ '../views/Zixutie.vue'),
    meta: {
      title: '自序帖｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/kuaixue',
    name: 'Kuaixue',
    component: () => import(/* webpackChunkName: "kuaixue" */ '../views/Kuaixue.vue'),
    meta: {
      title: '快雪時晴帖｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/dutong',
    name: 'Dutong',
    component: () => import(/* webpackChunkName: "dutong" */ '../views/Dutong.vue'),
    meta: {
      title: '肚痛帖｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/huaqi',
    name: 'Huaqi',
    component: () => import(/* webpackChunkName: "huaqi" */ '../views/Huaqi.vue'),
    meta: {
      title: '花氣熏人帖｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/hanshi',
    name: 'Hanshi',
    component: () => import(/* webpackChunkName: "hanshi" */ '../views/Hanshi.vue'),
    meta: {
      title: '黃州寒食帖｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/nongfangshi',
    name: 'Nongfangshi',
    component: () => import(/* webpackChunkName: "nongfangshi" */ '../views/Nongfangshi.vue'),
    meta: {
      title: '穠芳詩帖｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/shubotuquan',
    name: 'Shubotuquan',
    component: () => import(/* webpackChunkName: "shubotuquan" */ '../views/Shubotuquan.vue'),
    meta: {
      title: '書趵突泉詩｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue'),
    meta: {
      title: '常見問題｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue'),
    meta: {
      title: '店家資訊｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      title: '會員｜書彙齋'
      // transition: 'overlay-left-right'
    },
    children: [
      {
        path: 'pro',
        name: 'Pro',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Pro.vue'),
        meta: {
          title: '會員主頁｜書彙齋',
          transition: 'overlay-left-right'
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Order.vue'),
        meta: {
          title: '訂單｜書彙齋',
          transition: 'overlay-left-right'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
})
export default router
