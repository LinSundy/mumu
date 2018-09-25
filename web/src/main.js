// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'element-ui/lib/theme-chalk/pagination.css';
import Vue from 'vue';
import {Pagination} from 'element-ui';
import 'element-ui/lib/theme-chalk/pagination.css';
import App from './App';
import router from './router';
import MuMenu from './components/MuMenu';

Vue.config.productionTip = false;
Vue.use(MuMenu);
Vue.component('Pagination', Pagination);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>'
});
