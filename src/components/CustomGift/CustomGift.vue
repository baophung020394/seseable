<template>
  <div class="customGiftContainer wrapper">
    <h1 class="customGiftTitle">{{ sectionTitle }}</h1>
    <a-row class="customGiftRow" type="flex" justify="space-between" :gutter="[16, 16]">
      <a-col
        class="customGiftCol"
        :xs="{ span: 12 }"
        :sm="{ span: 12 }"
        :md="{ span: 6 }"
        :lg="{ span: 6 }"
        :xl="{ span: 6 }"
      >
        <a href="#" class="customGiftLink">
          <a-card hoverable class="customGiftCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/custom%20photo%20mugs-1640769603040.jpg"
            />
            <a-card-meta class="customGiftTitle" title="Custom Photo Mugs"> </a-card-meta>
            <a href="#" class="customGiftButtonExplorer"> Explorer now </a>
          </a-card>
        </a>
      </a-col>
      <a-col
        class="customGiftCol"
        :xs="{ span: 12 }"
        :sm="{ span: 12 }"
        :md="{ span: 6 }"
        :lg="{ span: 6 }"
        :xl="{ span: 6 }"
      >
        <a href="#" class="customGiftLink">
          <a-card hoverable class="customGiftCard">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/seseable/custom%20name%20sweatshirt-1640769610308.jpg"
            />
            <a-card-meta class="customGiftTitle" title="Custom Name Apparels"></a-card-meta>
            <a href="#" class="customGiftButtonExplorer"> Explorer now </a>
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
.customGiftTitle {
  font-size: 36px;
}
.customGiftRow {
  margin: 0 !important;
  .customGiftCol {
    width: 100%;
    max-width: 672px;
    padding: 0 !important;
    .customGiftCard {
      border: none;
      .ant-card-body {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
      }
      .customGiftTitle {
        margin-bottom: 15px;
        .ant-card-meta-title {
          color: white;
          font-size: 16px;
        }
      }
      .customGiftButtonExplorer {
        background: #ffffff;
        color: #000000;
        transition: 0.4s;
        padding: 10px 20px;
        font-size: 16px;
        &:hover {
          background: #000000;
          color: #ffffff;
        }
      }
    }
    .customGiftLink {
      display: inline-block;
      position: relative;
    }
  }
}
@media screen and (min-width: 1024px) {
  .customGiftRow {
    .customGiftCol {
      max-width: 470px;
    }
  }
}

@media screen and (min-width: 1200px) {
  .customGiftRow {
    .customGiftCol {
      max-width: 672px;
      .customGiftTitle {
        .ant-card-meta-title {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
