<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
        // It's possible to use default value:
        // default: 'Alex'
      },
      userAge: Number
    },
    methods: {
      resetName() {
        this.name = 'Alex';
        this.$emit('nameWasReset', this.name);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
