<template>
  <div class="headerContainer wrapper">
    <div class="headerLogo">
      <a href="/">Seseable</a>
    </div>
    <button class="headerButtonMenu" @click="toggle = !toggle">
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6 mr-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    <div class="headerNav" @click="toggle = !toggle" :class="toggle ? 'active' : ''">
      <ul class="headerMainMenu">
        <li class="headerItem">
          <a href="#">Men</a>
          <ul class="headerSubMenu">
            <li>
              <a href="#">Submenu 1</a>
            </li>
            <li>
              <a href="#">Submenu 2</a>
            </li>
            <li>
              <a href="#">Submenu 3</a>
            </li>
            <li>
              <a href="#">Submenu 4</a>
            </li>
          </ul>
        </li>
        <li class="headerItem">
          <a href="#">Women</a>
          <ul class="headerSubMenu">
            <li>
              <a href="#">Submenu 1</a>
            </li>
            <li>
              <a href="#">Submenu 2</a>
            </li>
            <li>
              <a href="#">Submenu 3</a>
            </li>
            <li>
              <a href="#">Submenu 4</a>
            </li>
          </ul>
        </li>
        <li class="headerItem">
          <a href="#">Kids</a>
          <ul class="headerSubMenu">
            <li>
              <a href="#">Submenu 1</a>
            </li>
            <li>
              <a href="#">Submenu 2</a>
            </li>
            <li>
              <a href="#">Submenu 3</a>
            </li>
            <li>
              <a href="#">Submenu 4</a>
            </li>
          </ul>
        </li>
        <li class="headerItem">
          <a href="#">Home & Living</a>
          <ul class="headerSubMenu">
            <li>
              <a href="#">Submenu 1</a>
            </li>
            <li>
              <a href="#">Submenu 2</a>
            </li>
            <li>
              <a href="#">Submenu 3</a>
            </li>
            <li>
              <a href="#">Submenu 4</a>
            </li>
          </ul>
        </li>
        <li class="headerItem">
          <a href="#">Gift for</a>
          <ul class="headerSubMenu">
            <li>
              <a href="#">Submenu 1</a>
            </li>
            <li>
              <a href="#">Submenu 2</a>
            </li>
            <li>
              <a href="#">Submenu 3</a>
            </li>
            <li>
              <a href="#">Submenu 4</a>
            </li>
          </ul>
        </li>
        <li class="headerItem">
          <a href="#">Gift Ideas</a>
          <ul class="headerSubMenu">
            <li>
              <a href="#">Submenu 1</a>
            </li>
            <li>
              <a href="#">Submenu 2</a>
            </li>
            <li>
              <a href="#">Submenu 3</a>
            </li>
            <li>
              <a href="#">Submenu 4</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="headerOptions">
      <div class="headerOption">
        <div class="headerSearchInput">
          <a-icon class="headerIconSearch" type="search" :style="{ fontSize: '28px' }" />
          <input type="text" placeholder="Search..." />
        </div>
        <button class="headerWishlist">
          <a-icon type="heart" :style="{ fontSize: '28px' }" />
        </button>
        <a href="#" class="headerCart">
          <a-icon type="shopping-cart" :style="{ fontSize: '28px', color: '#000' }" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style lang="scss">
.headerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  &.wrapper {
    padding: 0 1rem;
  }
  .headerLogo {
    flex: 6;
    order: 1;
    text-align: center;
    a {
      display: inline-block;
      text-transform: uppercase;
      color: #000;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .headerButtonMenu {
    flex: 1;
    order: 0;
    background: none;
    border: none;
    display: inline-block;
    text-align: left;
  }
  .headerNav {
    flex: 8;
    height: 100%;
    order: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    transition: 0.2s all linear;
    opacity: 0;
    visibility: hidden;
    &.active {
      opacity: 1;
      visibility: visible;
    }
    .headerMainMenu {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      width: 18rem;
      background: #ffffff;
      padding: 1.5rem;
      overflow-y: auto;
      li.headerItem {
        display: inline-block;
        a {
          display: block;
          color: #000;
          font-size: 16px;
          line-height: 32px;
        }
        .headerSubMenu {
          transition: 0.4s;
          transition-property: all;
          transition-duration: 0.3s;
          transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
          li {
            line-height: 2rem;
            a {
              color: rgb(107, 114, 128);
              font-size: 14px;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
  .headerOptions {
    order: 2;
    flex: 1;
    text-align: right;
    .headerSearchInput {
      display: none;
      background: rgb(243, 244, 246);
      border: 1px solid rgb(243, 244, 246);
    }
    .headerOption {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .headerWishlist {
        border: none;
        background: none;
        display: flex;
        align-items: center;
      }
      .headerCart {
        display: flex;
        align-items: center;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .headerContainer {
    &.wrapper {
      padding: 0 2rem;
    }
    .headerLogo {
      order: 0;
      flex: 3;
      text-align: left;
    }
    .headerButtonMenu {
      display: none;
    }
    .headerNav {
      flex: 8;
      height: 100%;
      order: 1;
      background: #ffffff;
      position: unset;
      opacity: 1;
      visibility: visible;
      .headerMainMenu {
        width: 100%;
        flex-direction: row;
        padding: 0;
        align-items: center;
        overflow-y: unset;
        li.headerItem {
          margin-right: 20px;
          display: inline-block;
          position: relative;
          &:hover {
            .headerSubMenu {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }
          }
          a {
            display: block;
            color: #000;
            font-size: 18px;
          }
          .headerSubMenu {
            position: absolute;
            top: 110%;
            left: 0;
            z-index: 1;
            transition: 0.4s;
            transition-property: all;
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
            opacity: 0;
            visibility: hidden;
            min-width: 170px;
            background: #000;
            transform: translateY(-10px);
            padding: 1rem;
            &:before {
              position: absolute;
              top: -15px;
              left: 8px;
              display: block;
              width: 0;
              height: 0;
              border: 8px solid transparent;
              border-bottom-color: #111;
              content: '';
            }
            li {
              a {
                color: white;
              }
            }
          }
        }
      }
    }
    .headerOptions {
      flex: 3;
      .headerSearchInput {
        min-width: 192px;
        max-width: 192px;
        border-radius: 40px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid rgb(243, 244, 246);
        .headerIconSearch {
          flex: 1;
        }
        input {
          flex: 3;
          border: none;
          width: 100%;
          height: 100%;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 40px;
          background-color: rgb(243, 244, 246);
        }
      }
    }
  }
}
</style>
