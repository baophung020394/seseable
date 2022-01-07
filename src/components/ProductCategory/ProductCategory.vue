<template>
  <div class="productCategoryContainer">
    <a-row class="productCategoryRow" type="flex" justify="space-around">
      <a-col :xs="{ span: 6, offet: 1}" :sm="{ span: 6}" :md="{ span: 6}" :lg="{ span: 3}" :xl="{ span: 3}">
        <a-card hoverable>
          <img
            slot="cover"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"> www.instagram.com </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :xs="{ span: 6}" :sm="{ span: 6}" :md="{ span: 6}" :lg="{ span: 3}" :xl="{ span: 3}">
        <a-card hoverable>
          <img
            slot="cover"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"> www.instagram.com </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :xs="{ span: 6}" :sm="{ span: 6}" :md="{ span: 6}" :lg="{ span: 3}" :xl="{ span: 3}">
        <a-card hoverable>
          <img
            slot="cover"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"> www.instagram.com </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :xs="{ span: 6}" :sm="{ span: 6}" :md="{ span: 6}" :lg="{ span: 3}" :xl="{ span: 3}">
        <a-card hoverable>
          <img
            slot="cover"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"> www.instagram.com </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: "ProductCategory",
};
</script>
<style scoped>
</style>