<template>
  <div class="homeContainer">
    <a-layout class="homeLayout">
      <a-layout-header class="homeHeader">
        <Header />
      </a-layout-header>
      <a-layout-content class="homeContent">
        <div class="homeSection">
          <Banner />
        </div>
      </a-layout-content>
      <!-- <a-layout-content class="homeContent">
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
      </a-layout-content>
      <a-layout-footer class="homeFooter">
        <FooterBottom />
      </a-layout-footer> -->
    </a-layout>
  </div>
</template>
<script>
// import ProductCategory from './ProductCategory/ProductCategory.vue';
// import BannerCategory from './BannerCategory/BannerCategory.vue';
// import MostFavoriteItems from './MostFavoriteItems/MostFavoriteItems.vue';
// import CustomGift from './CustomGift/CustomGift.vue';
// import NewArrivals from './NewArrivals/NewArrivals.vue';
// import Categories from './Categories/Categories.vue';
// import FooterBottom from './Footer/FooterBottom.vue';
import Header from './Header/Header.vue';
import Banner from './Banner/Banner.vue';

export default {
  name: 'Home',
  components: {
    // ProductCategory,
    // BannerCategory,
    // MostFavoriteItems,
    // CustomGift,
    // NewArrivals,
    // Categories,
    // FooterBottom,
    Header,
    Banner
  },
};
</script>
<style lang="scss">
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
.homeHeader.ant-layout-header {
  height: 72px;
  padding: 0 20px;
}
.headerContent.ant-layout-content {
  padding: 0 20px;
}
</style>
