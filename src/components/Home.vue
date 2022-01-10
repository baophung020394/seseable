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
          <MostFavoriteItems section-title="Most Favorite Items"  />
        </div>
        <div class="homeSection">
          <CustomGift section-title="Personalized Gifts For Your Beloved"  />
        </div>
        <div class="homeSection">
          <MostFavoriteItems section-title="New Arrivals"  />
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
import CustomGift from './CustomGift/CustomGift.vue';

export default {
  name: 'Home',
  components: {
    ProductCategory,
    BannerCategory,
    MostFavoriteItems,
    CustomGift,
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
