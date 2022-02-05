import Vue from 'vue'
import App from './App.vue'
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

Vue.use(VueKinesis)
Vue.use(VuePageTransition)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
