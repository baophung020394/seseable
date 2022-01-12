<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  overflow-x: hidden;
  background: white;
}
.wrapper {
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background: white;
}
@media screen and (min-width: 1200px) {
  .wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
