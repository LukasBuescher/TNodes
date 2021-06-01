import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: '#6A1B9A',
        accent: '#99722B',
        secondary: '#32064D',
        info: '#0A4D28',
        success: '#0C994C',

        error: '#A6167B',
        warning: '#A6167B',
      },
    },
  },
})
