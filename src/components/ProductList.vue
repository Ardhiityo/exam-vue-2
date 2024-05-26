<template>
    <transition-group tag="div" @before-enter="before" @enter="enter" @leave="leave">
        <div v-for="(item, index) in showItem" :key="item.id" :data-index="index">
            <div class="row">
                <div class="col-1 d-flex align-items-center">
                    <button class="btn btn-primary rounded-1" @click="$parent.$emit('add-item', item)">+</button>
                </div>
                <div class="col-5 d-flex align-items-center">
                    <img :src="item.image" alt="item.name" class="img-fluid">
                </div>
                <div class="col-6 d-flex flex-column align-items-start justify-content-center">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description }}</p>
                    <price :value="Number(item.price)"></price>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>

import Price from './Price.vue';

export default {
    name: 'product-list',
    components: {
        Price
    },
    props: ['products', 'maximum'],
    computed: {
        showItem: function () {
            let max = this.maximum;
            let items = this.products.filter(item => {
                if (Math.trunc(item.price) <= max) {
                    return item;
                }
            });
            return items;
        }
    },
    methods: {
        before: function (el) {
            return el.className = 'd-none';
        },
        enter: function (el) {
            let time = 100 * el.dataset.index;
            setTimeout(() => {
                return el.className = 'd-inline-block animate__animated animate__fadeInRight';
            }, time);
        },
        leave: function (el) {
            let time = 100 * el.dataset.index;
            setTimeout(() => {
                return el.className = 'd-inline-block animate__animated animate__fadeOutRight';
            }, time);
        }
    },
}
</script>