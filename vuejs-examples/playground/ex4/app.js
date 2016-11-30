new Vue({
  el: '#app',
  data: {
    value: ''
  },
  methods: {
    showAlert: function() {
      alert('Hi! i\'m Alert :)');
    },
    getValue: function(event) {
      this.value = event.target.value;
    }
  }
});
