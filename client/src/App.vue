<template>
<div id="app">
  <NavComponent/>
   <router-view />
</div>
</template>

<script>
import NavComponent from './components/NavComponent.vue';
export default {
  name: 'App',
  components: {
  NavComponent
  },
  data(){

    }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    margin: 0;
  padding: 0;
}
.navigation {
  background:#eded;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  line-height: 50px;
}

</style>
