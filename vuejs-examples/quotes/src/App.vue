<template>
    <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <app-new-quote @newQuoteAdded="addQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on a Quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';
  export default {
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header
    },
    data: () => ({
      quotes: [
        'Just a Quote',
        'Second quote for testing'
      ],
      maxQuotes: 10
    }),
    methods: {
      addQuote(quote) {
        if(this.quotes.length >= this.maxQuotes) {
          return alert('Please delete quote first');
        }
        this.quotes.push(quote);
      }
    }
  }
</script>

<style>
</style>
