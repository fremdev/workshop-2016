new Vue({
  el: '#app',
  data: {
    value: 0,
    seconds: 5
  },
  computed: {
    result: function() {
      return this.value <= 26 ? 'Not there yet' : 'Done';
    }
  },
  watch: {
    result: function() {
      const vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, vm.seconds * 1000);
    }
  }
});
