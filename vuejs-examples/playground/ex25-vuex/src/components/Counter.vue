<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement(10)">Decrement</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

    export default {
        methods: {
          ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
          ])
        }
    }
</script>
