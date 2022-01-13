<template>
  <div>
    <div class="homeSection">
      <Banner />
    </div>
    <div class="homeSection">
      <ProductCategory />
    </div>
    <div class="homeSection">
      <BannerCategory />
    </div>
    <div class="homeSection">
      <MostFavoriteItems section-title="Most Favorite Items" />
    </div>
    <div class="homeSection">
      <CustomGift section-title="Personalized Gifts For Your Beloved" />
    </div>
    <div class="homeSection">
      <NewArrivals section-title="New Arrivals" />
    </div>
    <div class="homeSection">
      <Categories />
    </div>
  </div>
</template>

<script>
import ProductCategory from '../ProductCategory/ProductCategory.vue';
import BannerCategory from '../BannerCategory/BannerCategory.vue';
import MostFavoriteItems from '../MostFavoriteItems/MostFavoriteItems.vue';
import CustomGift from '../CustomGift/CustomGift.vue';
import NewArrivals from '../NewArrivals/NewArrivals.vue';
import Categories from '../Categories/Categories.vue';
import Banner from '../Banner/Banner.vue';

export default {
  name: 'HomeSection',
  components: {
    ProductCategory,
    BannerCategory,
    MostFavoriteItems,
    CustomGift,
    NewArrivals,
    Categories,
    Banner,
  },
};
</script>

<style lang="scss"></style>
