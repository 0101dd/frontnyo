import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#202938',
        secondary: '#1D2025',
        waring: '#45312A',
        accent: '#DED7B9',
        info: '#D58E40',
        error: '#7e2f28'
      },
      light: {
        primary: '#202938',
        secondary: '#1D2025',
        waring: '#45312A',
        accent: '#DED7B9',
        info: '#D58E40',
        error: '#7e2f28'
      }
    }
  }
})
