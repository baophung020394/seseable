<template>
  <div class="pageSidebarContainer wrapper">
    <a-layout class="pageSidebarLayout">
      <a-layout-sider class="pageSidebarSider">Sider</a-layout-sider>
      <a-layout-content class="pageSidebarContent">
        <a-list
          class="demo-loadmore-list"
          :loading="loading"
          item-layout="vertical"
          :data-source="data"
        >
          <div
            v-if="showLoadingMore"
            slot="loadMore"
            :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
          >
            <a-spin v-if="loadingMore" />
            <a-button v-else @click="onLoadMore"> loading more </a-button>
          </div>
          <a-list-item slot="renderItem" slot-scope="item" class="pageSidebarCards">
            <a-card hoverable class="pageSidebarCard">
              <a href="#" class="pageSidebarLink">
                <img
                  slot="cover"
                  alt="example"
                  :src="item.image"
                />
              </a>
              <a href="#" class="pageSidebarTitleLink">
                <a-card-meta class="pageSidebarTitle" :title="item.title">
                </a-card-meta>
              </a>
              <span class="pageSidebarPrice">{{item.price}}</span>
            </a-card>
          </a-list-item>
        </a-list>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
// import reqwest from 'reqwest';
// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
import mockData from '../../mockData/mockData.json';

export default {
  name: 'PageSidebar',
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    };
  },
  mounted() {
    this.data = mockData?.results;
    this.loading = false;
    // this.getData((res) => {
    //   this.loading = false;
    //   this.data = res?.results;
    // });
  },
  methods: {
    // getData(callback) {
    //   reqwest({
    //     url: fakeDataUrl,
    //     type: 'json',
    //     method: 'get',
    //     contentType: 'application/json',
    //     success: (res) => {
    //       callback(res);
    //     },
    //   });
    // },
    onLoadMore() {
      this.loadingMore = true;
      setTimeout(() => {
        this.data = this.data.concat(mockData.results)
        this.loadingMore = false;
      }, 1000);
      
      // this.getData((res) => {
      //   this.data = this.data.concat(res.results);
      //   this.loadingMore = false;
      //   this.$nextTick(() => {
      //     window.dispatchEvent(new Event('resize'));
      //   });
      // });
    },
  },
};

</script>

<style lang="scss">
.demo-loadmore-list {
  min-height: 350px;
}
.pageSidebarContainer {
  background: #ffffff !important;
  .pageSidebarSider,
  .pageSidebarLayout {
    background: #ffffff !important;
  }
  .pageSidebarSider {
    display: none;
  }
  .pageSidebarContent {
    .ant-list-items {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      .pageSidebarCards {
        border-bottom: none;
        .pageSidebarCard {
            max-width: 236px;
            img {
              width: 100%;
            }
          }
      }
    }
  }
}
@media screen and (min-width:1200px) {
  .pageSidebarContainer {
    .pageSidebarSider {
      display: inline-block;
    }
    .pageSidebarContent {
      .ant-list-items {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
