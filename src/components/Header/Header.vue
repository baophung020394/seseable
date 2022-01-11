<template>
  <div class="headerContainer wrapper">
    <div class="headerLogo">
      <a href="/">Seseable</a>
    </div>
    <div class="headerNav"></div>
    <div class="headerOptions"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.headerLogo {
  a {
    display: inline-block;
    text-transform: uppercase;
  }
}
</style>
