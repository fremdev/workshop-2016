<template lang="html">
  <li class="list-group-item" @click="setActive">Server #{{ id }} - Status: {{ status }}</li>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
    id: Number,
    status: String
  },
  methods: {
    setActive() {
      eventBus.$emit('setActiveServer', this.id);
    }
  },
  created() {
    eventBus.$on('statusWasChanged', (id) => {
      if(this.id === id) {
        this.status = 'Normal';
      }
    });
  }
}
</script>
