<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <app-quote>
                <h2 slot="title">Quote</h2>
                <p slot="content">Wonderful Quote!</p>
                <!-- It's possible to use named slot + default slot without name -->
              </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
  import Quote from './components/Quote.vue';

  export default {
    components: {
      appQuote: Quote
    }
  }
</script>

<style scoped>

</style>
