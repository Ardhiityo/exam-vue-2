<template>
    <div class="container">
        <h1>IDshop</h1>
        <navbar :cart="cart" :totalPrice="totalPrice"></navbar>
        <price-slider :slider="slide"></price-slider>
        <product-list :products="products" :maximum="max"></product-list>
    </div>
</template>

<script>

import ProductList from './ProductList.vue';
import PriceSlider from './PriceSlider.vue';
import Navbar from './Navbar.vue';
import Checkout from './Checkout.vue';

export default {
    name: 'products',
    components: {
        ProductList,
        PriceSlider,
        Navbar,
        Checkout
    },
    props: ['cart', 'slide', 'max', 'products', 'totalPrice'],
}
</script>