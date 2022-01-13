<template>
  <div class="pageSidebarContainer wrapper">
    <a-layout class="pageSidebarLayout">
      <a-layout-sider class="pageSidebarSider">Sider</a-layout-sider>
      <a-layout-content class="pageSidebarContent">
        <a-list
          class="demo-loadmore-list"
          :loading="loading"
          item-layout="horizontal"
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
          <a-list-item>
            <div>content</div>
          </a-list-item>
        </a-list>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import reqwest from 'reqwest';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
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
    this.getData((res) => {
      this.loading = false;
      this.data = res.results;
    });
  },
  methods: {
    getData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: (res) => {
          callback(res);
        },
      });
    },
    onLoadMore() {
      this.loadingMore = true;
      this.getData((res) => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
        });
      });
    },
  },
};

console.log('fakeDataUrl', fakeDataUrl);
</script>

<style lang="scss">
.demo-loadmore-list {
  min-height: 350px;
}
</style>
