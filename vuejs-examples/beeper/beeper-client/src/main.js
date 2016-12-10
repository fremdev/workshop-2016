import Vue from 'vue';
import App from './App';
import router from './routes';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
