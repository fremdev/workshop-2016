<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <h1>Send your data:</h1>
                  <hr>
                  <app-full-name v-model="userData.fullName"></app-full-name>
                  <div class="form-group">
                    <label for="email">Mail</label>
                    <input
                      type="text"
                      id="email"
                      class="form-control"
                      v-model="userData.email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="text"
                      id="password"
                      class="form-control"
                      v-model="userData.password">
                  </div>

                  <label for="stored">
                    <input
                      type="radio"
                      value="Yes"
                      v-model="isStored">
                      Yes
                  </label>
                  <label for="stored">
                    <input
                      type="radio"
                      value="No"
                      v-model="isStored">
                      No
                  </label>
                  <div>
                    <button
                    class="btn btn-primary"
                    @click.prevent="submitForm">Submit Data</button>
                  </div>

                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ isStored }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import FullName from './FullName.vue';
    export default {
      data: () => ({
        userData: {
          fullName: 'Alex Efremov',
          email: '',
          password: ''
        },
        isStored: 'No',
        isSubmitted: false
      }),
      methods: {
        submitForm() {
          this.isSubmitted = true;
        }
      },
      components: {
        appFullName: FullName
      }
    }
</script>

<style>
</style>
