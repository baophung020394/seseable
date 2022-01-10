<template>
  <div class="customGiftContainer wrapper">
    <h1 class="mostFavoriteItemTitle">{{sectionTitle}}</h1>
    <a-row class="customGiftRow" type="flex" justify="space-around" :gutter="[16, 16]">
      <a-col
        class="customGiftCol"
        :xs="{ span: 12 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
      >
        <a href="#" class="customGiftLink">
          <a-card hoverable class="customGiftCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/custom%20photo%20mugs-1640769603040.jpg"
            />
            <a-card-meta class="productCategoryTitle" title="Birthday Gifts"> </a-card-meta>
          </a-card>
        </a>
      </a-col>
      <a-col
        class="customGiftCol"
        :xs="{ span: 12 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
      >
        <a href="#" class="customGiftLink">
          <a-card hoverable class="customGiftCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/custom%20photo%20mugs-1640769603040.jpg"
            />
            <a-card-meta class="productCategoryTitle" title="Valentine's Day Gifts"></a-card-meta>
          </a-card>
        </a>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'CustomGift',
  props: ['sectionTitle'],
};
</script>
<style lang="scss">
.customGiftRow {
  margin: 0 !important;
  .customGiftCol {
    max-width: 600px;
    padding: 0 !important;
    .customGiftCard {
      border: none;
      .ant-card-body {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
      }
      .productCategoryTitle {
        .ant-card-meta-title {
          color: white;
          font-size: 24px;
        }
      }
    }
    .customGiftLink {
      display: inline-block;
      position: relative;
    }
  }
}
</style>
