new Vue({
  el: '#app',
  data: {
    currentClass: 'shrink',
    isBlue: false,
    userClass: '',
    isCircle: 'false',
    userStyle: '100px',
    calculatedWidth: 0,
    isRunning: false,
    progressInterval: null
  },
  methods: {
    startEffect: function() {
      const vm = this;
      setInterval(function() {
        vm.currentClass = vm.currentClass === 'shrink' ? 'highlight' : 'shrink';
      }, 2000);
    },
    toggleProgress: function() {
      this.isRunning = !this.isRunning;
      if(this.isRunning) {
        const vm = this;
        this.progressInterval = setInterval(function() {
          vm.calculatedWidth += 3;
        }, 100);
      } else {
        clearInterval(this.progressInterval);
      }
    }
  },
  computed: {
    circleSwitch: function() {
      if(this.isCircle === 'true') {
        return true;
      }
      return false;
    }
  }
});
