<template>
    <span>{{ prefix + Number.parseFloat(value).toFixed(precision) }}</span>
</template>

<script>
export default {
    name: 'price',
    props: {
        value: Number,
        prefix: {
            type: String,
            default: 'Rp'
        },
        precision: {
            type: Number,
            default: 3
        }
    }
}
</script>

<style></style>