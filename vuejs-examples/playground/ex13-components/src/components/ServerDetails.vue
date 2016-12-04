<template lang="html">
  <div class="col-xs-12 col-sm-6">
      <p v-if="!serverId">Server Details are currently not updated</p>
      <p v-else>Active server is: {{ serverId }}</p>
      <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  data: function() {
    return {
      serverId: null
    }
  },
  created() {
    eventBus.$on('setActiveServer', (id) => {
      this.serverId = id;
    });
  },
  methods: {
    changeStatus() {
      eventBus.$emit('statusWasChanged', this.serverId);
    }
  }
}
</script>
