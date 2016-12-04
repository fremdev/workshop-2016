<template lang="html">
  <div>
    <div class="title">
      <slot name="title"></slot>
      <!-- It's possible to use default content for slot if content is not provided -->
      <span><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <hr>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2 {
    color: #5585c2;
  }
  .title {
    font-style: italic;
  }
</style>
