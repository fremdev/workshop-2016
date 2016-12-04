<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent = 'appQuote'">Quote</button>
              <button @click="selectedComponent = 'appAuthor'">Author</button>
              <button @click="selectedComponent = 'appNew'">New</button>
              <hr>
              <p>{{ selectedComponent }}</p>
              <keep-alive>
                <component :is="selectedComponent">
                  <p>Default content</p>
                </component>
              </keep-alive>

              <!-- <app-quote>
                <h2 slot="title">Quote</h2>
                <p slot="content">Wonderful Quote!</p> -->
                <!-- It's possible to use named slot + default slot without name -->
              <!-- </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    },
    data: function() {
      return {
        selectedComponent: 'appQuote'
      };
    }
  }
</script>

<style scoped>

</style>
