<template>
    <div class="shopItem">
        <img class="image" :src="item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" :width="item._embedded['wp:featuredmedia'][0].media_details.width" :height="item._embedded['wp:featuredmedia'][0].media_details.height" />        
        <h3>{{ item.title.rendered }} </h3>        
        <p class="price"><span class="bold">Price:</span> £{{ item.acf.price }}</p>
        <p class="description">{{ item.acf.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 320px) {
    .bold {
        font-weight: 700;
    }
    .shopItem {        
        text-align: start;
        width: 70%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
    }
    .shopItem > * {
        width: 100%;
        margin: 0;
    }
    h3 {
        padding-top: 1em;
    }
    .price {
        align-self: flex-start;
        padding-top: 0.4em;
    }
    .image {
        width: 100%;
        height: auto;    
        //background: rgb(216, 216, 216);
    }
    .description {
        text-align: justify;
        font-size: 0.88em;
        padding-top: 0.5em;
    }
}
</style>

<script>
    export default {
        name: 'shopItem',
        props: ["item"]
    }
</script>