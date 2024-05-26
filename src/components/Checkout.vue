<template>

    <div>

        <table class="table text-end" style="margin-top: 80px;">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                    <th scope="col">Sub-total</th>
                </tr>
            </thead>
            <tbody v-for="item in cart" :key="item.id">
                <tr>
                    <td scope="row">
                        <div class="btn-group">
                            <button class="btn btn-outline-primary" @click="$emit('add-item', item.products)">+</button>
                            <button class="btn btn-primary" @click="$emit('remove-item', item)">-</button>
                        </div>
                    </td>
                    <td>{{ item.products.name }}</td>
                    <td>{{ item.qty }}</td>
                    <td>
                        <price :value="Number(item.products.price)"></price>
                    </td>
                    <td>
                        <price :value="Number(item.products.price * item.qty)"></price>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="row">
            <div class="col d-flex justify-content-end">
                <price :value="totalPrice"></price>
                <router-link to="/" class="btn btn-sm btn-outline-primary">Checkout</router-link>
            </div>
        </div>

    </div>
</template>

<script>

import Price from './Price.vue';

export default {
    name: 'checkout',
    components: {
        Price
    },
    props: ['cart', 'totalPrice']
}
</script>
