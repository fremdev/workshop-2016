Vue.component('frm-message', {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{ status }}</p>'
});

new Vue({
  el: '#app'
});
