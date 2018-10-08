import '@babel/polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import './plugins/vuetify';
import App from './App.vue';


Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  render: h => h(App),
}).$mount('#app');
