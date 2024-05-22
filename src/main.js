import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';

import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')