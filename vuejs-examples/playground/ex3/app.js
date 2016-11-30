new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    addToCounter: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    showAlert: function(message) {
      alert(message);
    }
  }
});
