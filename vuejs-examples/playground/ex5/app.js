new Vue({
  el: '#app',
  data: {
    testText: '2 way binding',
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  // watch - mostly for async tasks
  watch: {
    counter: function() {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 4000)
    }
  },
  methods: {

  }
});
