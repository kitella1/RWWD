<template>
    <div class="shopItem">
        <h3>{{ item.title.rendered }} </h3>
        <img id="image" :src="item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" />
        <p>{{ item.acf.description }}</p>
        <p>£{{ item.acf.price }}</p>
    </div>
</template>

<style lang="scss" scoped>
    #image {
        width: 50%;
    }
</style>

<script>
    export default {
        name: 'shopItem',
        props: ["item"]
    }
</script>