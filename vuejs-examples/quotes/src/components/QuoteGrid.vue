<template lang="html">
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';
  export default {
    components: {
      appQuote: Quote
    },
    props: ['quotes'],
    methods: {
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style lang="css">
</style>
