import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', value => value.toLowerCase());

// Global mixin example
Vue.mixin({
  created() {
    console.log('Global mixin - created hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
