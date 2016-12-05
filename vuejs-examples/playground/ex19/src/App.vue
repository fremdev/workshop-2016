<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Strong text example</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-myon:click="log">Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-highlight="'green'">Color this</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: '#cffc45', secondColor: '#fc88fd', delay: 500}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'local-highlight': {
          bind(el, binding, vnode) {
            let delay = 0;
            if (binding.modifiers['delayed']) {
              delay = 3000;
            }
            if (binding.modifiers['blink']) {
              let mainColor = binding.value.mainColor;
              let secondColor = binding.value.secondColor;
              let currentColor = mainColor;
              setTimeout(() => {
                setInterval(() => {
                  currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor;
                  if (binding.arg === 'background') {
                    el.style.backgroundColor = currentColor;
                  } else {
                    el.style.color = currentColor;
                  }
                }, binding.value.delay);

              }, delay);
            } else {
              setTimeout(() => {
                if (binding.arg === 'background') {
                  el.style.backgroundColor = binding.value.mainColor;
                } else {
                  el.style.color = binding.value.mainColor;
                }
              }, delay);
            }
          }
        },
        myon: {
          bind(el, binding, vnode) {
            el.addEventListener(binding.arg, binding.value);
          }
        }
      },
      methods: {
        log() {
          console.log('My custon on directive works!!');
        }
      }
    }
</script>

<style>

</style>
