<template>
    <transition name="fade">
        <div class="py-3" v-if="slider">
            <label for="max">Max</label>
            <input type="number" id="max" v-model="maxAmount" @change="$parent.$emit('update:max', maxAmount)">
            <input type="range" v-model="maxAmount" @input="$parent.$emit('update:max', maxAmount)">
        </div>
    </transition>
</template>
<script>
export default {
    data: function () {
        return {
            maxAmount: 50
        }
    },
    props: ['slider']
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>