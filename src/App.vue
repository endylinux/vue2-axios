<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';

export default {
  name: 'App',
  components: {
    'app-header': Header
  },
  created() {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
