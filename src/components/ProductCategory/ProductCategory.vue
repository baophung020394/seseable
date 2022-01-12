<template>
  <div class="productCategoryContainer wrapper">
    <a-row class="productCategoryRow" type="flex" justify="space-between" :gutter="[16, 16]">
      <a-col class="productCategoryCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 12 }">
        <a href="#" class="productCategoryLink">
          <a-card hoverable class="productCategoryCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/tshirts-1640764652641.jpg"
            />
            <a-card-meta class="productCategoryTitle" title="T-shirts"> </a-card-meta>
          </a-card>
        </a>
      </a-col>
      <a-col class="productCategoryCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 12 }">
        <a href="#" class="productCategoryLink">
          <a-card hoverable class="productCategoryCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/mugs%20%282%29-1640765589323.jpg"
            />
            <a-card-meta class="productCategoryTitle" title="Mugs"> </a-card-meta>
          </a-card>
        </a>
      </a-col>
      <a-col class="productCategoryCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 12 }">
        <a href="#" class="productCategoryLink">
          <a-card hoverable class="productCategoryCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/thongs-and-boxers-1641459859312.png"
            />
            <a-card-meta class="productCategoryTitle" title="Thongs and Boxers"> </a-card-meta>
          </a-card>
        </a>
      </a-col>
      <a-col class="productCategoryCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 12 }">
        <a href="#" class="productCategoryLink">
          <a-card hoverable class="productCategoryCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/metal-signs-1641460659599.png"
            />
            <a-card-meta class="productCategoryTitle" title="Metal Signs"> </a-card-meta>
          </a-card>
        </a>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'ProductCategory',
};
</script>
<style lang="scss">
.productCategoryRow {
  margin: 0 !important;
  .productCategoryCol {
    max-width: 438px;
    padding: 0 !important;
    .productCategoryCard {
      border: none;
      &:hover {
        .ant-card-body {
          padding-left: 10px;
        }
        .productCategoryTitle {
          .ant-card-meta-title {
            font-size: 22px;
          }
        }
      }
      .ant-card-body {
        transition: 0.4s;
        padding: 10px 0 0;
      }
      .productCategoryTitle {
        font-size: 24px;
        margin: 0;
        .ant-card-meta-title {
          transition: 0.4s;
          font-size: 24px;
        }
      }
    }
  }
}
@media screen and (min-width: 1345px) {
  .productCategoryRow {
    .productCategoryCol {
      max-width: 320px;
    }
  }
}
</style>
