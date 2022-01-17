import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/HomeSection/HomeSection.vue';
import PageSidebar from '../components/PageSidebar/PageSidebar.vue';
import Cart from '../components/Cart/Cart.vue';
import ProductDetail from '../components/ProductDetail/ProductDetail.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/categories',
            name: 'PageSidebar',
            component: PageSidebar,
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
        },
        {
            path: '/product-detail',
            name: 'ProductDetail',
            component: ProductDetail,
        },
    ],
});