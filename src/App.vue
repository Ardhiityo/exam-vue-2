<template>
  <div id="app">
    <router-view 
    :cart="cart" 
    :totalPrice="totalPrice"
    :slide="slide" 
    :max.sync="max" 
    :products="products" 
    @slide-status="slideStatus" 
    @remove-item="removeItem" 
    @add-item="addItems">
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      products: [],
      max: 50,
      cart: [],
      slide: true,
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
  methods: {
    addItems: function (item) {
      let getIndex;

      const check = this.cart.filter(function (items, index) {
        if (items.products.id === item.id) {
          getIndex = index;
          return true;
        }
      });

      if (check.length) {
        return this.cart[getIndex].qty++;
      } else {
        return this.cart.push({
          products: item,
          qty: 1
        })
      }
    },
    slideStatus: function () {
      return this.slide = !this.slide;
    },
    removeItem: function (item) {
      let getIndex;

      this.cart.filter(function (items, index) {
        if (items.products.id === item.products.id) {
          getIndex = index;
        }
      });

      if (this.cart[getIndex].qty > 1) {
        return this.cart[getIndex].qty--;
      } else {
        return this.cart.splice(this.cart[getIndex], 1);
      }
    },
  },
  computed: {
    totalPrice: function () {
      let total = 0;
      for (const item of this.cart) {
        total += (item.products.price * item.qty);
      }
      return total;
    }
  }
}

</script>
