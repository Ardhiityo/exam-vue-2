<template>
  <div id="app">
    <div class="container">
      <h1>IDshop</h1>
      <product-list :products="products" :max="max"></product-list>
    </div>
  </div>
</template>

<script>

import ProductList from './components/ProductList.vue';

export default {
  name: 'app',
  data: function () {
    return {
      products: null,
      max: 50
    }
  },
  mounted: function () {
    fetch('https://hplussport.com/api/products/order/price')
      .then((result) => result.json())
      .then((result) => this.products = result)
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    ProductList
  }
}

</script>
