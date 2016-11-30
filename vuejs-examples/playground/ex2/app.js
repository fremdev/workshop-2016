new Vue({
  el: '#app',
  data: {
    name: 'Alex',
    age: 30,
    image: 'https://hollowtree.gallerycdn.vsassets.io/extensions/hollowtree/vue-snippets/0.0.8/1479051734727/Microsoft.VisualStudio.Services.Icons.Default'
  },
  methods: {
    getRandomNum: function() {
      return Math.floor(Math.random() * 101);
    }
  }
});
