import '@babel/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import './plugins/vuetify';
import App from './App.vue';
import BlogpostDetails from './components/BlogpostDetails.vue';
import HomePage from './components/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/blog-post/:id', component: BlogpostDetails },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});


Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
