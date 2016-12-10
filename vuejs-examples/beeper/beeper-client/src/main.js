import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import router from './routes';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:9090';
Vue.http.options.emulateJSON = true;

alertify.defaults.notifier.position = 'top-right';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
