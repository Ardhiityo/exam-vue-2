import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import Products from './components/Products.vue';
import Checkout from './components/Checkout.vue';

import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faDollarSign);

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
    routes: [{
        path: '*',
        component: Products
      },
      {
        path: '/checkout',
        component: Checkout
      },
    ]
  }

)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')