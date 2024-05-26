<template>
    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container">
            <span class="navbar-brand mb-0 h1">IDshop</span>

            <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-primary" @click="$parent.$emit('slide-status')">
                    <font-awesome-icon icon="dollar-sign" />
                </button>

                <div class="dropdown mx-2">

                    <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span class="badge badge-primary">
                            <font-awesome-icon icon="cart-shopping" class="mx-2"/>
                            {{ totalQty }}
                        </span>
                        <span class="badge badge-primary">
                            <price :value="totalPrice"></price>
                        </span>
                    </button>

                    <div class="dropdown-menu">
                        <div v-for="(item, index) in cart" :key="index">


                            <span class="badge badge-badge text-bg-primary">{{ item.qty }}</span>
                            <span>{{ item.products.name }}</span>
                            <price :value="item.products.price * item.qty"></price>
                            <span class="badge badge-badge text-bg-danger" @click.stop="$parent.$emit('remove-item', item)">-</span>

                            
                            
                        </div>
                        <router-link to="/checkout" class="btn btn-sm btn-outline-primary">Checkout</router-link>
                    </div>

                </div>

            </div>
        </div>
    </nav>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Price from './Price.vue';

export default {
    name: 'navbar',
    components: {
        Price,
        FontAwesomeIcon
    },
    props: ['cart', 'totalPrice'],
    computed: {
        totalQty: function () {
            let total = 0;
            for (const item of this.cart) {
                total += item.qty;
            }
            return total;
        },
    },
}
</script>

<style></style>