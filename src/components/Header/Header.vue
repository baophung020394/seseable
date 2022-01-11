<template>
  <div class="headerContainer wrapper">
    <div class="headerLogo">
      <a href="/">Seseable</a>
    </div>
    <div class="headerNav">
      <ul class="headerMainMenu">
        <li>
          <a href="#">Menu 1</a>
          <ul class="headerSubMenu">
            <li>
              <a href="#">Menu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Menu 2</a>
        </li>
        <li>
          <a href="#">Menu 3</a>
        </li>
        <li>
          <a href="#">Menu 4</a>
        </li>
        <li>
          <a href="#">Menu 5</a>
        </li>
        <li>
          <a href="#">Menu 6</a>
        </li>
      </ul>
    </div>
    <div class="headerOptions">
      Options
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.headerContainer {
  .headerLogo {
    a {
      display: inline-block;
      text-transform: uppercase;
    }
  }
  .headerNav
}
</style>
