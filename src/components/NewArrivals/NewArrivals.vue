<template>
  <div class="newArrivalsContainer wrapper">
    <h1 class="newArrivalsTitle">{{ sectionTitle }}</h1>
    <VueSlickCarousel class="newArrivalsCarousel" v-bind="settings" :arrows="true" :dots="false">
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/IVS4Bd-1641532004875.jpeg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/5lYedF-1641524600011.jpeg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/pjR7XO-1641537889081.jpeg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/adg5SI-1641530982642.jpeg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
        </a-card>
      </div>
      <div class="newArrivalsCard">
        <a-card hoverable>
          <a href="#" class="newArrivalsLink">
            <img
              slot="cover"
              alt="example"
              src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
            />
          </a>
          <a href="#" class="newArrivalsTitleLink">
            <a-card-meta class="newArrivalsTitle" title="688 Atlanta Simple Design T-Shirt">
            </a-card-meta>
          </a>
          <span class="newArrivalsPrice">US$20.99</span>
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
  name: 'NewArrivals',
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
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
.newArrivalsContainer {
  position: relative;
  .newArrivalsCarousel {
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

  .newArrivalsTitle {
    font-size: 36px;
  }
}
.newArrivalsCard {
  // max-width: 326px;
  .ant-card {
    cursor: unset;
    border: none;
  }
  .ant-card-body {
    padding: 0;
    .newArrivalsTitleLink {
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
    .newArrivalsPrice {
      display: block;
      margin-top: 8px;
      font-size: 16px;
      color: #000;
    }
    .newArrivalsLink {
      display: inline-block;
      max-width: 326px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
