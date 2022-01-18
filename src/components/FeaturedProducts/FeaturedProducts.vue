<template>
  <div class="featuredProductsContainer">
    <h1 class="featuredProductsTitle">{{ sectionTitle }}</h1>
    <VueSlickCarousel class="featuredProductsCarousel" v-bind="settings" :arrows="true" :dots="false">
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/IVS4Bd-1641532004875.jpeg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/5lYedF-1641524600011.jpeg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/pjR7XO-1641537889081.jpeg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/adg5SI-1641530982642.jpeg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="featuredProductsCard">
        <a-card hoverable>
          <a href="#" class="featuredProductsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="featuredProductsTitleLink">
            <a-card-meta class="featuredProductsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="featuredProductsPrice">US$20.99</span>
        </a-card>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'FeaturedProducts',
  props: ['sectionTitle'],
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.featuredProductsContainer {
  position: relative;
  margin-top: 30px;
  .featuredProductsCarousel {
    .slick-arrow.slick-prev {
      position: absolute;
      top: -40px;
      right: 117px;
      z-index: 1;
      left: unset;
      &:before {
        content: '⟵';
        color: black;
        border: 1px solid #111;
        padding: 0.5rem 1rem 1rem;
      }
    }
    .slick-arrow.slick-next {
      position: absolute;
      top: -40px;
      right: 53px;
      z-index: 1;
      left: unset;
      &:before {
        content: '⟶';
        color: black;
        border: 1px solid #111;
        padding: 0.5rem 1rem 1rem;
      }
    }
  }

  .featuredProductsTitle {
    font-size: 20px;
    margin-bottom: 5px;
  }
}
.featuredProductsCard {
  // max-width: 326px;
  .ant-card {
    cursor: unset;
    border: none;
  }
  .ant-card-body {
    padding: 0;
    .featuredProductsTitleLink {
      color: #000;
      display: block;
      margin-top: 15px;
      &:hover {
        text-decoration: underline;
      }
      .ant-card-meta-title {
        font-size: 15px;
      }
    }
    .featuredProductsPrice {
      display: block;
      margin-top: 8px;
      font-size: 16px;
      color: #000;
    }
    .featuredProductsLink {
      display: inline-block;
      max-width: 326px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
