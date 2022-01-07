<template>
  <div class="homeContainer">
    <a-layout class="homeLayout">
      <a-layout-header class="homeHeader">Header</a-layout-header>
      <a-layout-content class="homeContent">
        <ProductCategory />
      </a-layout-content>
      <a-layout-footer class="homeFooter">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import ProductCategory from './ProductCategory/ProductCategory.vue';

export default {
  name: 'Home',
  components: {
    ProductCategory
  }
}
</script>