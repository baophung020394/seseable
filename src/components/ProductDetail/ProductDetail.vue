<template>
  <div class="productDetailContainer wrapper">
    <div class="productDetailColumns">
      <div class="productDetailLeft">
        <div class="productDetailLeftGallery">
          <img
            class="productDetailImage"
            src="https://images.cloudfable.com/styles/550x550/118.front/Black/20220112143906-i54iaigb.jpg"
          />
          <VueSlickCarousel
            class="productDetailLeftGalleryCarousel"
            v-bind="settings"
            :arrows="true"
            :dots="false"
          >
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/IVS4Bd-1641532004875.jpeg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/5lYedF-1641524600011.jpeg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/pjR7XO-1641537889081.jpeg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/07/adg5SI-1641530982642.jpeg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
            <div class="productDetailLeftGalleryCard">
              <a-card hoverable>
                <a href="#" class="productDetailLeftGalleryLink">
                  <img
                    slot="cover"
                    alt="example"
                    src="https://images.cloudfinary.com/styles/326x326/8.front/White/20211124134954-uofbv0ij.jpg"
                  />
                </a>
                <a href="#" class="productDetailLeftGalleryTitleLink">
                  <a-card-meta
                    class="productDetailLeftGalleryTitle"
                    title="688 Atlanta Simple Design T-Shirt"
                  >
                  </a-card-meta>
                </a>
                <span class="productDetailLeftGalleryPrice">US$20.99</span>
              </a-card>
            </div>
          </VueSlickCarousel>
        </div>

        <div class="productDetailLeftDesc">
          <h3 class="productDetailLeftDescTitle">Specifications</h3>
          <span>Tank Top Unisex</span>
          <p>5.3 oz., pre-shrunk 100% cotton</p>
          <p>Graphite Heather and Safety Pink are 50/50 cotton/polyester</p>
          <p>Banded neck and armholes</p>
          <p>Double-needle stitched bottom hem</p>
          <p>Quarter-turned</p>
          <span>Tank Top Unisex</span>
          <p>5.3 oz., pre-shrunk 100% cotton</p>
          <p>Graphite Heather and Safety Pink are 50/50 cotton/polyester</p>
          <p>Banded neck and armholes</p>
          <p>Double-needle stitched bottom hem</p>
          <p>Quarter-turned</p>
        </div>

        <div class="productDetailReview">
          <h3 class="productDetailReviewTitle">Reviews (14)</h3>

          <div class="productDetailReviewItem">
            <div class="productDetailReviewStar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </div>
            <div class="productDetailReviewBar">
              <div class="productDetailReviewResult" style="width: calc(83%)"></div>
            </div>
          </div>

          <div class="productDetailReviewItem">
            <div class="productDetailReviewStar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </div>
            <div class="productDetailReviewBar">
              <div class="productDetailReviewResult" style="width: calc(83%)"></div>
            </div>
          </div>

          <div class="productDetailReviewItem">
            <div class="productDetailReviewStar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </div>
            <div class="productDetailReviewBar">
              <div class="productDetailReviewResult" style="width: calc(12%)"></div>
            </div>
          </div>

          <div class="productDetailReviewItem">
            <div class="productDetailReviewStar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </div>
            <div class="productDetailReviewBar">
              <div class="productDetailReviewResult" style="width: calc(30%)"></div>
            </div>
          </div>

          <div class="productDetailReviewItem">
            <div class="productDetailReviewStar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star star-on"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="rating-star"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </div>
            <div class="productDetailReviewBar">
              <div class="productDetailReviewResult" style="width: calc(20%)"></div>
            </div>
          </div>

          <h3 class="productDetailReviewTitle">All Reviews</h3>

          <a-list class="productListReviews" item-layout="horizontal" :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <div class="productDetailReviewStar" slot="title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="rating-star star-on"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="rating-star star-on"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="rating-star"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="rating-star"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="rating-star"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    ></path>
                  </svg>
                </div>
                <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
              <div class="productDetailBoxReply">
                <button class="btn-reply">Reply</button>
                <a-form
                  class="productDetailReplyForm"
                  :form="form"
                  :label-col="{ span: 5 }"
                  :wrapper-col="{ span: 12 }"
                  @submit="handleSubmit"
                >
                  <a-form-item label="Email">
                    <a-input
                      v-decorator="['email', { rules: [{ required: true, message: 'Email' }] }]"
                    />
                  </a-form-item>
                  <a-form-item label="Name">
                    <a-input
                      v-decorator="['name', { rules: [{ required: true, message: 'Name' }] }]"
                    />
                  </a-form-item>
                  <a-form-item label="Content">
                    <a-input
                      type="textarea"
                      v-decorator="['content', { rules: [{ required: true, message: 'Content' }] }]"
                    />
                  </a-form-item>
                  <a-form-item class="btn-submit" :wrapper-col="{ span: 12, offset: 5 }">
                    <a-button type="primary" html-type="submit"> Submit </a-button>
                  </a-form-item>
                </a-form>
              </div>
            </a-list-item>
          </a-list>
        </div>
      </div>

      <div class="productDetailRight">
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="#">Shop</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="#">Clothing</a></a-breadcrumb-item>
          <a-breadcrumb-item>Unisex</a-breadcrumb-item>
        </a-breadcrumb>
        <h2 class="productDetailRightTitle">
          You Got A Dog I Raise Tiny Dinosaurs Unisex Tank Top
        </h2>
        <span class="productDetailRightPrice">US$26.95</span>
        <div class="productDetailRightSizes">
          <span class="productDetailRightSizeTitle">Select Size</span>
          <button class="productDetailRightSize">S</button>
          <button class="productDetailRightSize">M</button>
          <button class="productDetailRightSize">L</button>
          <button class="productDetailRightSize">XL</button>
          <button class="productDetailRightSize">2XL <span>+$2</span></button>
          <button class="productDetailRightSize">3XL <span>+$3</span></button>
        </div>
        <div class="productDetailRightQuantity">
          <span>Quantity: </span>
          <div class="productDetailPriceChoose">
            <button class="minus">-</button>
            <input type="text" value="1" />
            <button class="plus">+</button>
          </div>
        </div>
        <div class="productDetailProceed">
          <button class="productDetailProceedButton">Add to cart</button>
        </div>
        <div class="productDetailBadges">
          <div class="productDetailBadge">
            <span> Buy 2 to get 5% off with code OFF5 </span>
            <a href="#"> Copy & Buy Now</a>
          </div>
          <div class="productDetailBadge">
            <span> Buy 2 to get 5% off with code OFF5 </span>
            <a href="#"> Copy & Buy Now</a>
          </div>
          <div class="productDetailBadge">
            <span> Buy 2 to get 5% off with code OFF5 </span>
            <a href="#"> Copy & Buy Now</a>
          </div>
          <div class="productDetailBadge">
            <span> Buy 2 to get 5% off with code OFF5 </span>
            <a href="#"> Copy & Buy Now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="productDetailOther">
      <FeaturedProducts sectionTitle="Featured Products" />
    </div>

    <div class="productDetailOther">
      <RecentProducts sectionTitle="Recent View Products" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.vue';
import RecentProducts from '../RecentProducts/RecentProducts.vue';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default {
  name: 'ProductDetail',
  components: {
    VueSlickCarousel,
    FeaturedProducts,
    RecentProducts,
  },
  data() {
    return {
      data,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 7,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.productDetailContainer {
  padding-top: 40px;
  padding-bottom: 40px;
  .productDetailColumns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .productDetailLeft {
      width: 100%;
      margin-bottom: 30px;
      .productDetailImage {
        max-height: 550px;
      }
      .productDetailLeftDesc {
        margin-top: 30px;
        .productDetailLeftDescTitle {
          font-size: 22px;
          color: #000;
          margin-bottom: 15px;
        }
        span {
          display: inline-block;
          font-size: 16px;
          color: rgb(107, 114, 128);
          font-weight: 600;
          margin-bottom: 8px;
        }
        p {
          line-height: 20px;
          font-size: 14px;
          margin-bottom: 8px;
        }
      }
      .productDetailReview {
        margin-top: 30px;
        .productDetailReviewTitle {
          font-size: 22px;
          color: #000;
          margin-top: 15px;
          margin-bottom: 15px;
          display: block;
          width: 100%;
        }
      }
      .productListReviews {
        .ant-list-item {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .productDetailBoxReply {
          width: 100%;
          .productDetailReplyForm {
            margin-top: 15px;
          }
          .btn-reply {
            margin-top: 15px;
            border-radius: 40px;
            background: #ffffff;
            border: 1px solid #aaaaaa;
            padding: 3px 10px;
            color: #000;
          }
          .btn-submit {
            .ant-btn-primary {
              border-radius: 40px;
              background: #ffffff;
              border: 1px solid #aaaaaa;
              padding: 3px 10px;
              color: #000;
            }
          }
        }
      }
      .productDetailReview {
        .rating-star {
          color: #e1e1e1;
          margin-right: 7px;
          &:last-child {
            margin-right: 0;
          }
        }
        .star-on {
          fill: rgb(255, 188, 89);
          color: rgb(255, 188, 89);
        }
        .productDetailReviewItem {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .productDetailReviewStar {
          width: 100px;
        }
        .productDetailReviewBar {
          height: calc(8px / 2);
          width: calc(100% - 100px);
          background-color: rgba(211, 211, 211, 0.6);
          border-radius: 8px;
          display: flex;
          margin: 0 0 0 8px;
          position: relative;
          overflow: hidden;
          .productDetailReviewResult {
            transition: all 300ms ease-in-out;
            width: 0;
            height: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #6551cc;
          }
        }
      }
    }
    .productDetailRight {
      width: 100%;
      .ant-breadcrumb-link {
        color: #000;
      }
      .ant-breadcrumb a {
        color: #000;
        &:hover {
          text-decoration: underline;
        }
      }
      .productDetailRightTitle {
        margin-top: 10px;
        font-size: 24px;
      }
      .productDetailRightPrice {
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
      }
      .productDetailRightSizes {
        margin-bottom: 15px;
        .productDetailRightSizeTitle {
          font-size: 16px;
          color: #000000;
          display: block;
          margin-bottom: 10px;
        }
        .productDetailRightSize {
          font-size: 16px;
          padding: 5px 12px;
          margin-right: 10px;
          background: #ffffff;
          border: 1px solid #000;
          transition: all 0.2s;
          margin-bottom: 10px;
          &:hover {
            background: #000;
            color: #ffffff;
          }
          span {
            color: red;
          }
        }
      }
      .productDetailProceed {
        margin-top: 15px;
        button {
          width: 100%;
          max-height: 50px;
          padding: 15px 0;
          background: #000;
          color: #ffffff;
          text-align: center;
          transition: 0.2s all;
          border: 1px solid #000;
          &:hover {
            background: #ffffff;
            color: #000;
          }
        }
      }
      .productDetailBadges {
        margin: 15px auto;
        // max-width: 403px;
        width: 100%;

        .productDetailBadge {
          border-radius: 40px;
          background-color: #fbeaec;
          max-height: 65px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 10px 20px 20px;
          margin-bottom: 20px;
          span {
            font-size: 16px;
            color: #000;
          }
          a {
            border-radius: 40px;
            background: #ff7300;
            color: #fff;
            display: inline-block;
            max-width: 100px;
            max-height: 47px;
            text-align: center;
            padding: 3px 15px;
            font-size: 13px;
            font-weight: bold;
          }
        }
      }
    }
    .productDetailLeftGallery {
      img {
        width: 100%;
      }
    }
  }
  .productDetailRightQuantity {
    span {
      display: inline-block;
      margin-bottom: 10px;
    }
  }
  .productDetailPriceChoose {
    display: flex;
    align-items: center;
    border: 1px solid rgb(209, 213, 219);
    max-width: 118px;
    min-width: 118px;
    margin-right: 10px;
    button {
      // padding: 5px 0;
      flex: 1;
      max-width: 40px;
      border: none;
      background-color: none;
      background: #ffffff;
      font-size: 20px;
      min-height: 34px;
      font-weight: bold;
    }
    input {
      height: 100%;
      text-align: center;
      // padding: 5px 0;
      flex: 1;
      max-width: 40px;
      background: #ffffff;
      border-top: none;
      border-bottom: none;
      border-left: 1px solid rgb(209, 213, 219);
      border-right: 1px solid rgb(209, 213, 219);
      min-height: 34px;
      font-weight: bold;
    }
  }
  .productDetailLeftGalleryCarousel {
    margin-top: 15px;
    .slick-arrow.slick-prev {
      position: absolute;
      top: 50%;
      left: -20px !important;
      z-index: 1;
      transform: translateY(-70%);
      left: unset;
      &:before {
        content: '⟵';
        color: black;
        border: 1px solid #111;
        padding: 5px 10px 10px;
      }
    }
    .slick-arrow.slick-next {
      position: absolute;
      top: 50%;
      right: 10px;
      z-index: 1;
      transform: translateY(-70%);
      left: unset;
      &:before {
        content: '⟶';
        color: black;
        border: 1px solid #111;
        padding: 5px 10px 10px;
      }
    }
  }
  .productDetailLeftGalleryCard {
    max-width: 120px;
    .ant-card {
      cursor: unset;
      border: none;
    }
    .ant-card-body {
      padding: 0;
      .productDetailLeftGalleryTitleLink {
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
      .productDetailLeftGalleryPrice {
        display: block;
        margin-top: 8px;
        font-size: 16px;
        color: #000;
      }
      .productDetailLeftGalleryLink {
        display: inline-block;
        max-width: 326px;
        img {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .productDetailContainer {
    .productDetailColumns {
      flex-direction: row;
      .productDetailLeft {
        width: 63%;
        margin-bottom: 0;
      }
      .productDetailRight {
        width: 35%;
      }
    }
    .productDetailReview {
      .productDetailReviewItem {
        width: 50% !important;
      }
    }
  }
}
</style>
