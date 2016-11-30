new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">One more Google link</a>'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});
