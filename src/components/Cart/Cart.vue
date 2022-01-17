<template>
  <div class="cartWrapperBackground">
    <div class="cartContainer wrapper">
      <div class="cartHeader">
        <h1>Cart Summary</h1>
      </div>
      <div class="cartContent">
        <div class="cartContentLeft">
          <img
            src="https://eagles.nyc3.digitaloceanspaces.com/2022/01/16/pIBYZdwQL0z-1642301194477.jpeg"
            class="cartContentLeftImage"
          />
        </div>
        <div class="cartContentRight">
          <div class="cartContentRightInfo">
            <h3>
              <a href="#"
                >Custom Best Title Name Ever Women Vneck Tshirt | Custom Name | Personalized Name
                Women Vneck Tshirt</a
              >
            </h3>
            <span class="cartContentRightInfoDesc"
              >Custom Women Vneck Tshirts/Black/L - US$28.95</span
            >
          </div>
          <div class="cartContentRightPrice">
            <div class="cartContentRightPriceChoose">
              <button class="minus">-</button>
              <input type="text" value="1" />
              <button class="plus">+</button>
            </div>
            <span class="cartContentRightPriceText">US$28.95</span>
            <button class="cartDelete">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 text-red-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path
                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                ></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="cartProceed">
        <div class="cartProceedLeft">
          <input type="text" placeholder="Enter your coupon code" />
          <button class="cartProceedLeftApply">Apply</button>
        </div>
        <div class="cartProceedRight">
          <div class="cartProceedRightSubTotal">
            <span class="text">Sub total</span>
            <span class="price">US$20.99</span>
          </div>
          <button class="cartProceedRightSubProceed">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
};
</script>

<style lang="scss">
.cartWrapperBackground {
  background: #f3f4f6;
}
.cartContainer {
  padding-top: 60px;
  padding-bottom: 60px;
  &.wrapper {
    background: #f3f4f6;
  }
  .cartHeader {
    margin-bottom: 30px;
    h1 {
      font-size: 24px;
      font-weight: 500;
    }
  }
  .cartContent {
    display: flex;
    background: #fff;
    padding: 15px 10px;
    position: relative;
  }
  .cartProceed {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    .cartProceedRight {
      min-width: 300px;
      .cartProceedRightSubTotal {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        span {
          font-size: 16px;
        }
      }
      .cartProceedRightSubProceed {
        width: 100%;
        background: #000;
        border: 1px solid #000;
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
        transition: 0.4s all;
        max-height: 50px;
        min-height: 50px;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }
    .cartProceedLeft {
      max-height: 50px;
      border: 1px solid #000;
      display: flex;
      justify-content: space-between;
      min-width: 300px;
      input {
        border: 1px solid #ffffff;
        background: #ffffff;
        padding: 10px;
        flex: 3;
      }
      .cartProceedLeftApply {
        flex: 1;
        background: #000;
        border: 1px solid #000;
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
        padding: 0 15px;
        transition: 0.4s all;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }
  }
  .cartDelete {
    position: absolute;
    top: 20px;
    right: 0;
    z-index: 1;
    background: none;
    border: none;
  }
  .cartContentLeft {
    flex: 1;
    .cartContentLeftImage {
      max-width: 96px;
    }
  }
  .cartContentRight {
    flex: 10;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    .cartContentRightInfo {
      flex: 4;
      padding-right: 20px;
      margin-bottom: 15px;
      h3 {
        a {
          font-size: 18px;
          color: #000;
          &:hover {
            color: #aaaaaa;
          }
        }
      }
      .cartContentRightInfoDesc {
        font-size: 14px;
        color: rgb(107, 114, 128);
        margin-bottom: 4px;
        display: inline-block;
      }
    }
    .cartContentRightPrice {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .cartContentRightPriceText {
        font-size: 16px;
        font-weight: 400;
      }
      .cartContentRightPriceChoose {
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
    }
  }
}
@media screen and (min-width: 1200px) {
  .cartContainer {
    .cartProceed {
      flex-direction: row;
      justify-content: space-between;
    }
    .cartContentRight {
      flex-direction: row;
      align-items: unset;
    }
  }
}
</style>
