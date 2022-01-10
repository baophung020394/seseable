<template>
  <div class="homeContainer">
    <a-layout class="homeLayout">
      <a-layout-header class="homeHeader">Header</a-layout-header>
      <a-layout-content class="homeContent">
        <div class="homeSection">
          <ProductCategory />
        </div>
        <div class="homeSection">
          <BannerCategory />
        </div>
        <div class="homeSection">
          <MostFavoriteItems />
        </div>
      </a-layout-content>
      <a-layout-footer class="homeFooter">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import ProductCategory from './ProductCategory/ProductCategory.vue';
import BannerCategory from './BannerCategory/BannerCategory.vue';
import MostFavoriteItems from './MostFavoriteItems/MostFavoriteItems.vue';

export default {
  name: 'Home',
  components: {
    ProductCategory,
    BannerCategory,
    MostFavoriteItems,
  },
};
</script>
<style lang="scss">
.homeHeader,
.homeFooter,
.homeContent,
.homeLayout {
  background: white;
}
.homeSection {
  margin-bottom: 60px;
}
</style>
