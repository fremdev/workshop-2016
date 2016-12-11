import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import router from './routes';
import Auth from './plugins/Auth';

Vue.use(VueResource);
Vue.use(Auth);
Vue.http.options.root = process.env.API;
Vue.http.options.emulateJSON = true;

alertify.defaults.notifier.position = 'top-right';

Vue.http.interceptors.push((req, next) => {
  if(!req.url.includes('http')) {
    const token = Vue.auth.getToken();
    if(token) {
      req.headers.set('Authorization', 'Bearer ' + token);
    }
  }
  next((res) => {
    if(res.status == 422) {
      res.body.errors.forEach(e => alertify.error(e));
    }
  });
});

// configure route guards
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresGuest)
    && Vue.auth.loggedIn()) {
      next({ path: 'newsfeed'});
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
