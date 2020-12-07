import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#546E7A',
        secondary: '#607d8b',
        accent: '#263238',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#03a9f4',
        success: '#8bc34a',
      },
    },
  },
})
