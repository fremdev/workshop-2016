<template lang="html">
  <div>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        class="form-control"
        :value="name"
        @input="nameChanged(true, $event)">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        :value="lastName"
        @input="nameChanged(false, $event)">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    name: '',
    lastName: ''
  }),
  computed: {
    name: function() {
      return this.value.split(' ')[0];
    },
    lastName: function() {
      return this.value.split(' ')[1];
    }
  },
  methods: {
    nameChanged: function(isFirst, event) {
      let name = '';
      if(isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.name + ' ' + event.target.value;
      }
      this.value = name;
      this.$emit('input', name);

    }
  }
}
</script>

<style lang="css">
</style>
