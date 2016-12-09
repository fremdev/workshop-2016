<template>
    <div>
        <button class="btn btn-primary" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement(10)">Decrement</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
      methods: {
        ...mapActions([
          'increment',
          'decrement'
        ])
      }
  }
</script>
