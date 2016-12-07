<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigatToHome" class="btn btn-primary">To Home</button>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
      methods: {
        navigatToHome() {
          // this.$router.push('/');
          this.$router.push({name: 'home'});
        }
      }
    }
</script>
