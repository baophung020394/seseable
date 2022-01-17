<template>
  <div id="app">
    <a-layout class="homeLayout">
      <a-layout-header class="homeHeader">
        <Header />
      </a-layout-header>
      <a-layout-content class="homeContent">
        <router-view></router-view>
        <!-- <Cart /> -->
      </a-layout-content>
      <a-layout-footer class="homeFooter">
        <FooterBottom />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
// import Home from './components/Home.vue';
import FooterBottom from './components/Footer/FooterBottom.vue';
import Header from './components/Header/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
    FooterBottom,
  },
};
</script>

<style>
@font-face {
  font-family: helvetica-neue;
  src: url('./assets/fonts/HelveticaNeue.ttf');
}
#app {
  font-family: Avenir, Helvetica, Arial, helvetica-neue, sans-serif;
  color: #2c3e50;
  overflow-x: hidden;
  background: white;
}
.wrapper {
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background: white;
  padding-left: 2rem;
  padding-right: 2rem;
}
.homeHeader,
.homeFooter,
.homeContent,
.homeLayout {
  background: white !important;
}
.homeSection {
  margin-bottom: 60px;
}
.homeFooter {
  background-color: #e5e7eb !important;
}
.homeFooter.ant-layout-footer {
  padding: 24px 0;
}
.homeHeader.ant-layout-header {
  height: 72px;
  padding: 0 20px;
}
.headerContent.ant-layout-content {
  padding: 0 20px;
}
@media screen and (min-width: 1200px) {
  /* .wrapper {
    padding-left: 0;
    padding-right: 0;
  } */
}
</style>
