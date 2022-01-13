<template>
  <div class="footerBottomContainer wrapper">
    <a-row class="footerBottomRow" type="flex" justify="space-between" :gutter="[16, 16]">
      <a-col class="footerBottomCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="footerBottomTitle">Company</h3>
        <ul class="footerBottomList">
          <li>
            <a title="Funny T-shirts" class="footerBottomLink" href="/shop/clothing/tshirts/funny"
              >Funny T-shirts</a
            >
          </li>
          <li>
            <a title="Quote T-shirts" class="footerBottomLink" href="/shop/clothing/tshirts/quote"
              >Quote T-shirts</a
            >
          </li>
          <li>
            <a title="Job T-shirts" class="footerBottomLink" href="/shop/clothing/tshirts/job"
              >Job T-shirts</a
            >
          </li>
          <li>
            <a title="Dog T-shirts" class="footerBottomLink" href="/shop/clothing/tshirts/dog"
              >Dog T-shirts</a
            >
          </li>
          <li>
            <a title="Mom T-shirts" class="footerBottomLink" href="/shop/clothing/tshirts/mom"
              >Mom T-shirts</a
            >
          </li>
          <li>
            <a
              title="Best Friend T-shirts"
              class="footerBottomLink"
              href="/shop/clothing/tshirts/best-friend"
              >Best Friend T-shirts</a
            >
          </li>
        </ul>
      </a-col>
      <a-col class="footerBottomCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="footerBottomTitle">Help</h3>
        <ul class="footerBottomList">
          <li>
            <a title="Dad Mugs" class="footerBottomLink" href="/shop/home-living/coffee-mugs/dad"
              >Dad Mugs</a
            >
          </li>
          <li>
            <a
              title="Teacher Mugs"
              class="footerBottomLink"
              href="/shop/home-living/coffee-mugs/teacher"
              >Teacher Mugs</a
            >
          </li>
          <li>
            <a
              title="Nurse Mugs"
              class="footerBottomLink"
              href="/shop/home-living/coffee-mugs/nurse"
              >Nurse Mugs</a
            >
          </li>
          <li>
            <a
              title="Baseball Mugs"
              class="footerBottomLink"
              href="/shop/home-living/coffee-mugs/baseball"
              >Baseball Mugs</a
            >
          </li>
          <li>
            <a title="Name Mugs" class="footerBottomLink" href="/shop/home-living/coffee-mugs/name"
              >Name Mugs</a
            >
          </li>
          <li>
            <a
              title="Vintage Mugs"
              class="footerBottomLink"
              href="/shop/home-living/coffee-mugs/vintage"
              >Vintage Mugs</a
            >
          </li>
        </ul>
      </a-col>
      <a-col class="footerBottomCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="footerBottomTitle">Worldwide Delivery</h3>
        <ul class="footerBottomList">
          <li>
            <a title="Couple Gifts" class="footerBottomLink" href="/gift-ideas/gifts-for-couples"
              >Couple Gifts</a
            >
          </li>
          <li>
            <a
              title="Anniversary Gifts"
              class="footerBottomLink"
              href="/gift-ideas/anniversary-gifts"
              >Anniversary Gifts</a
            >
          </li>
          <li>
            <a title="Birthday Gifts" class="footerBottomLink" href="/shop/gifts/birthday-gifts"
              >Birthday Gifts</a
            >
          </li>
          <li>
            <a title="Wedding Gifts" class="footerBottomLink" href="/gift-ideas/wedding-gifts"
              >Wedding Gifts</a
            >
          </li>
          <li>
            <a title="First Dad Gifts" class="footerBottomLink" href="/gift-ideas/first_dad_gifts"
              >First Dad Gifts</a
            >
          </li>
          <li>
            <a title="Graduation Gifts" class="footerBottomLink" href="/gift-ideas/graduation-gifts"
              >Graduation Gifts</a
            >
          </li>
        </ul>
      </a-col>
      <a-col class="footerBottomCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="footerBottomTitle">Trending</h3>
        <ul class="footerBottomList">
          <li>
            <a title="Halloween Gifts" class="footerBottomLink" href="/gift-ideas/halloween-gifts"
              >Halloween Gifts</a
            >
          </li>
          <li>
            <a
              title="Thanksgiving Gifts"
              class="footerBottomLink"
              href="/gift-ideas/thanksgiving-gifts"
              >Thanksgiving Gifts</a
            >
          </li>
          <li>
            <a title="Christmas Gifts" class="footerBottomLink" href="/gift-ideas/christmas-gifts"
              >Christmas Gifts</a
            >
          </li>
          <li>
            <a title="Veteran Gifts" class="footerBottomLink" href="/gift-ideas/veteran-gifts"
              >Veteran Gifts</a
            >
          </li>
          <li>
            <a title="Hanukkah Gifts" class="footerBottomLink" href="/gift-ideas/hanukkah-gifts"
              >Hanukkah Gifts</a
            >
          </li>
          <li>
            <a title="Scorpio Gifts" class="footerBottomLink" href="/shop/scorpio">Scorpio Gifts</a>
          </li>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'FooterBottom',
};
</script>

<style lang="scss">
.footerBottomContainer {
  background-color: #e5e7eb !important;
  .footerBottomTitle {
    font-size: 20px;
  }
  .footerBottomList {
    li {
      line-height: 35px;
    }
    .footerBottomLink {
      font-size: 14px;
      color: #000;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
