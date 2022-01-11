<template>
  <div class="categoriesContainer wrapper">
    <a-row class="categoriesRow" type="flex" justify="center" :gutter="[16, 16]">
      <a-col class="categoriesCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="categoriesTitle">Popular T-Shirts</h3>
        <ul class="categoriesList">
          <li>
            <a title="Funny T-shirts" class="categoriesLink" href="/shop/clothing/tshirts/funny"
              >Funny T-shirts</a
            >
          </li>
          <li>
            <a title="Quote T-shirts" class="categoriesLink" href="/shop/clothing/tshirts/quote"
              >Quote T-shirts</a
            >
          </li>
          <li>
            <a title="Job T-shirts" class="categoriesLink" href="/shop/clothing/tshirts/job"
              >Job T-shirts</a
            >
          </li>
          <li>
            <a title="Dog T-shirts" class="categoriesLink" href="/shop/clothing/tshirts/dog"
              >Dog T-shirts</a
            >
          </li>
          <li>
            <a title="Mom T-shirts" class="categoriesLink" href="/shop/clothing/tshirts/mom"
              >Mom T-shirts</a
            >
          </li>
          <li>
            <a
              title="Best Friend T-shirts"
              class="categoriesLink"
              href="/shop/clothing/tshirts/best-friend"
              >Best Friend T-shirts</a
            >
          </li>
        </ul>
      </a-col>
      <a-col class="categoriesCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="categoriesTitle">Favorite Mugs</h3>
        <ul class="categoriesList">
          <li>
            <a title="Dad Mugs" class="categoriesLink" href="/shop/home-living/coffee-mugs/dad"
              >Dad Mugs</a
            >
          </li>
          <li>
            <a
              title="Teacher Mugs"
              class="categoriesLink"
              href="/shop/home-living/coffee-mugs/teacher"
              >Teacher Mugs</a
            >
          </li>
          <li>
            <a title="Nurse Mugs" class="categoriesLink" href="/shop/home-living/coffee-mugs/nurse"
              >Nurse Mugs</a
            >
          </li>
          <li>
            <a
              title="Baseball Mugs"
              class="categoriesLink"
              href="/shop/home-living/coffee-mugs/baseball"
              >Baseball Mugs</a
            >
          </li>
          <li>
            <a title="Name Mugs" class="categoriesLink" href="/shop/home-living/coffee-mugs/name"
              >Name Mugs</a
            >
          </li>
          <li>
            <a
              title="Vintage Mugs"
              class="categoriesLink"
              href="/shop/home-living/coffee-mugs/vintage"
              >Vintage Mugs</a
            >
          </li>
        </ul>
      </a-col>
      <a-col class="categoriesCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="categoriesTitle">Gift For</h3>
        <ul class="categoriesList">
          <li>
            <a title="Couple Gifts" class="categoriesLink" href="/gift-ideas/gifts-for-couples"
              >Couple Gifts</a
            >
          </li>
          <li>
            <a title="Anniversary Gifts" class="categoriesLink" href="/gift-ideas/anniversary-gifts"
              >Anniversary Gifts</a
            >
          </li>
          <li>
            <a title="Birthday Gifts" class="categoriesLink" href="/shop/gifts/birthday-gifts"
              >Birthday Gifts</a
            >
          </li>
          <li>
            <a title="Wedding Gifts" class="categoriesLink" href="/gift-ideas/wedding-gifts"
              >Wedding Gifts</a
            >
          </li>
          <li>
            <a title="First Dad Gifts" class="categoriesLink" href="/gift-ideas/first_dad_gifts"
              >First Dad Gifts</a
            >
          </li>
          <li>
            <a title="Graduation Gifts" class="categoriesLink" href="/gift-ideas/graduation-gifts"
              >Graduation Gifts</a
            >
          </li>
        </ul>
      </a-col>
      <a-col class="categoriesCol" :xs="{ span: 12 }" :sm="{ span: 12 }" :xl="{ span: 6 }">
        <h3 class="categoriesTitle">Trending</h3>
        <ul class="categoriesList">
          <li>
            <a title="Halloween Gifts" class="categoriesLink" href="/gift-ideas/halloween-gifts"
              >Halloween Gifts</a
            >
          </li>
          <li>
            <a
              title="Thanksgiving Gifts"
              class="categoriesLink"
              href="/gift-ideas/thanksgiving-gifts"
              >Thanksgiving Gifts</a
            >
          </li>
          <li>
            <a title="Christmas Gifts" class="categoriesLink" href="/gift-ideas/christmas-gifts"
              >Christmas Gifts</a
            >
          </li>
          <li>
            <a title="Veteran Gifts" class="categoriesLink" href="/gift-ideas/veteran-gifts"
              >Veteran Gifts</a
            >
          </li>
          <li>
            <a title="Hanukkah Gifts" class="categoriesLink" href="/gift-ideas/hanukkah-gifts"
              >Hanukkah Gifts</a
            >
          </li>
          <li>
            <a title="Scorpio Gifts" class="categoriesLink" href="/shop/scorpio">Scorpio Gifts</a>
          </li>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Categories',
};
</script>

<style lang="scss">
.categoriesContainer {
  max-width: 1220px !important;
  .categoriesTitle {
    font-size: 20px;
  }
  .categoriesList {
    li {
      line-height: 35px;
    }
    .categoriesLink {
      font-size: 16px;
      color: rgb(107, 114, 128);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
