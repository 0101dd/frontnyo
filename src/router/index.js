import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '書彙齋'
      // transition: 'fade-in-down'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊｜書彙齋'
      //  transition: 'overlay-down-full'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入｜書彙齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/ProductPage',
    name: 'productPage',
    component: () => import(/* webpackChunkName: "productPage" */ '../views/ProductPage.vue'),
    meta: {
      title: '客製專區 | 書彙齋'
    }
  },
  {
    path: '/MyWorkPage',
    name: 'myWorkPage',
    component: () => import(/* webpackChunkName: "myWorkPage" */ '../views/MyWorkPage.vue'),
    meta: {
      title: '作品專區 | 書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    meta: {
      title: '商品 | 書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/maobi',
    name: 'Maobi',
    component: () => import(/* webpackChunkName: "maobi" */ '../views/Maobi.vue'),
    meta: {
      title: '毛筆介紹｜書彙齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/mozhi',
    name: 'Mozhi',
    component: () => import(/* webpackChunkName: "mozhi" */ '../views/Mozhi.vue'),
    meta: {
      title: '墨汁介紹｜書彙齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/zhi',
    name: 'Zhi',
    component: () => import(/* webpackChunkName: "zhi" */ '../views/Zhi.vue'),
    meta: {
      title: '紙類介紹｜書彙齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/xuexi',
    name: 'Xuexi',
    component: () => import(/* webpackChunkName: "xuexi" */ '../views/Xuexi.vue'),
    meta: {
      title: '學習方法｜書彙齋'
      // transition: 'overlay-down-full'
    }
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue'),
    meta: {
      title: '精選字帖｜書彙齋'
      // transition: 'overlay-left-right'
    }
  },
  {
    path: '/shupu',
    name: 'Shupu',
    component: () => import(/* webpackChunkName: "shupu" */ '../views/Shupu.vue'),
    meta: {
      title: '書譜｜書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/zixutie',
    name: 'Zixutie',
    component: () => import(/* webpackChunkName: "zixutie" */ '../views/Zixutie.vue'),
    meta: {
      title: '自序帖｜書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/kuaixue',
    name: 'Kuaixue',
    component: () => import(/* webpackChunkName: "kuaixue" */ '../views/Kuaixue.vue'),
    meta: {
      title: '快雪時晴帖｜書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/dutong',
    name: 'Dutong',
    component: () => import(/* webpackChunkName: "dutong" */ '../views/Dutong.vue'),
    meta: {
      title: '肚痛帖｜書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/huaqi',
    name: 'Huaqi',
    component: () => import(/* webpackChunkName: "huaqi" */ '../views/Huaqi.vue'),
    meta: {
      title: '花氣熏人帖｜書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/hanshi',
    name: 'Hanshi',
    component: () => import(/* webpackChunkName: "hanshi" */ '../views/Hanshi.vue'),
    meta: {
      title: '黃州寒食帖｜書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/nongfangshi',
    name: 'Nongfangshi',
    component: () => import(/* webpackChunkName: "nongfangshi" */ '../views/Nongfangshi.vue'),
    meta: {
      title: '穠芳詩帖｜書彙齋',
      transition: 'overlay-left-right'
    }
  },
  {
    path: '/shubotuquan',
    name: 'Shubotuquan',
    component: () => import(/* webpackChunkName: "shubotuquan" */ '../views/Shubotuquan.vue'),
    meta: {
      title: '書趵突泉詩｜書彙齋',
      transition: 'overlay-left-right'
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
      title: '會員｜書彙齋',
      login: true
      // transition: 'overlay-left-right'
    },
    children: [
      {
        path: 'users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Users.vue'),
        meta: {
          title: '會員主頁｜書彙齋',
          login: true,
          transition: 'overlay-left-right'
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Cart.vue'),
        meta: {
          title: '購物清單 | 書彙齋'
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Order.vue'),
        meta: {
          title: '訂單｜書彙齋',
          login: true,
          transition: 'overlay-left-right'
        }
      },
      {
        path: 'userWorks',
        name: 'UserWorks',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/UserWorks.vue'),
        meta: {
          title: '作品管理｜書彙齋',
          login: true,
          transition: 'overlay-left-right'
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      // {
      //   path: '',
      //   name: 'AdminHome',
      //   component: () => import(/* webpackChunkName: "admin" */ '../views/AdminHome.vue'),
      //   meta: {
      //     login: true,
      //     admin: true,
      //     title: '管理 | 書彙齋'
      //   }
      // },
      {
        path: 'adminPro',
        name: 'AdminPro',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminPro.vue'),
        meta: {
          login: true,
          // admin: true,
          title: '會員管理｜書彙齋',
          transition: 'overlay-left-right'
        }
      },
      {
        path: 'adminOrder',
        name: 'AdminOrder',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrder.vue'),
        meta: {
          login: true,
          // admin: true,
          title: '訂單管理｜書彙齋',
          transition: 'overlay-left-right'
        }
      },
      {
        path: 'adminProduct',
        name: 'AdminProduct',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminProduct.vue'),
        meta: {
          login: true,
          // admin: true,
          title: '商品管理｜書彙齋',
          transition: 'overlay-left-right'
        }
      },
      {
        path: 'adminQ',
        name: 'AdminQ',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminQ.vue'),
        meta: {
          login: true,
          // admin: true,
          title: '常見問題管理｜書彙齋',
          transition: 'overlay-left-right'
        }
      }
    ]
  }
]

// router 頁面最上
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滾動到哪個的位置
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
