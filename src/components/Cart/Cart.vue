<template>
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
.cartContainer {
  .cartContent {
  }
  .cartContentLeft {
    .cartContentLeftImage {
      max-width: 96px;
    }
  }
  .cartContentRight {
    display: flex;
    justify-content: space-between;
    .cartContentRightInfo {
      flex: 4;
      h3 {
        a {
          font-size: 20px;
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
      flex: 2;
      display: flex;
      align-items: center;
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
          background: none;
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
</style>
