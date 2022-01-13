<template>
  <div class="bannerCategoryContainer wrapper">
    <a-row class="bannerCategoryRow" type="flex" justify="space-between" :gutter="[16, 16]">
      <a-col
        class="bannerCategoryCol"
        :xs="{ span: 12 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 8 }"
      >
        <a href="#" class="bannerCategoryLink">
          <a-card hoverable class="bannerCategoryCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/Birthday%20Gifts-1640755839805.jpg"
            />
            <a-card-meta class="productCategoryTitle" title="Birthday Gifts"> </a-card-meta>
          </a-card>
        </a>
      </a-col>
      <a-col
        class="bannerCategoryCol"
        :xs="{ span: 12 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 8 }"
      >
        <a href="#" class="bannerCategoryLink">
          <a-card hoverable class="bannerCategoryCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/Valentine%20Gifts-1640755895240.jpg"
            />
            <a-card-meta class="productCategoryTitle" title="Valentine's Day Gifts"></a-card-meta>
          </a-card>
        </a>
      </a-col>
      <a-col
        class="bannerCategoryCol"
        :xs="{ span: 12 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 8 }"
      >
        <a href="#" class="bannerCategoryLink">
          <a-card hoverable class="bannerCategoryCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/100th%20days%20of%20school-1640756492786.jpg"
            />
            <a-card-meta
              class="productCategoryTitle"
              title="100th Days Of School Gifts"
            ></a-card-meta>
          </a-card>
        </a>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'BannerCategory',
};
</script>
<style lang="scss">
.bannerCategoryRow {
  margin: 0 !important;
  .bannerCategoryCol {
    max-width: 438px;
    padding: 0 !important;
    .bannerCategoryCard {
      border: none;
      .ant-card-body {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
      }
      .productCategoryTitle {
        .ant-card-meta-title {
          color: white;
          font-size: 14px;
        }
      }
    }
    .bannerCategoryLink {
      display: inline-block;
      position: relative;
    }
  }
}
@media screen and (min-width: 1200px) {
  .bannerCategoryRow {
    .bannerCategoryCol {
      .bannerCategoryCard {
        .productCategoryTitle {
          .ant-card-meta-title {
            color: white;
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
