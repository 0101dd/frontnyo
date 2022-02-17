import Vue from 'vue'
import App from './App.vue'
import 'mutationobserver-shim'
import './plugins/axios.js'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './styles/styles.scss'
import VuePageTransition from 'vue-page-transition'
import VueKinesis from 'vue-kinesis'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import mixin from './mixin.js'

Vue.use(VueKinesis)
Vue.use(VuePageTransition)
Vue.use(VueSweetalert2)
Vue.component('ImgInputer', ImgInputer)
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
