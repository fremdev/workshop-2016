<template lang="html">
  <p>New</p>
</template>

<script>
export default {
  deactivated() {
    console.log('was deactivated');
  },
  activated() {
    console.log('was activated');
  }
}
</script>

<style lang="css">
</style>
