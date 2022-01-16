<template>
  <div class="sidebarLeftContainer">
    <div class="sidebarLeftFilter">
      <h3 class="sidebarLeftTitle">Categories</h3>
      <a-list item-layout="horizontal" :data-source="categoryList">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta>
            <a slot="title" href="#">{{ item.categoryName }}</a>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
    <div class="sidebarLeftFilter">
      <h3 class="sidebarLeftTitle">Products</h3>
      <a-list item-layout="horizontal" :data-source="productList">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta>
            <a slot="title" href="#">{{ item.productName }}</a>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
    <div class="sidebarLeftFilter">
      <h3 class="sidebarLeftTitle">Sizes</h3>
      <div class="sidebarLeftSizeButton">
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
        <span>2XL</span>
        <span>3XL</span>
        <span>4XL</span>
        <span>5XL</span>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesData from '../../mockData/categoriesData.json';
import productsData from '../../mockData/productsData.json';
export default {
  name: 'SidebarLeft',
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      categoryList: [],
      productList: [],
    };
  },
  mounted() {
    this.categoryList = categoriesData?.results;
    this.productList = productsData?.results;
    this.loading = false;
  },
};
</script>

<style lang="scss">
.sidebarLeftContainer {
  .sidebarLeftFilter {
    margin-bottom: 15px;
    .sidebarLeftTitle {
      font-size: 20px;
    }
    .sidebarLeftSizeButton {
      span {
        display: inline-block;
        padding: 3px 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        border: 1px solid #000;
        transition: 0.2s all;
        cursor: pointer;
        &:hover {
          background: #000;
          color: #fff;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .ant-list-item {
      border: none;
      padding: 0;
      margin-top: 5px;
    }
    .ant-list-item-meta-title {
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
