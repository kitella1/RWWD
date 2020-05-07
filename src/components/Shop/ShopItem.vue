<template>
    <div class="shopItem">
        <img class="image" :src="item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" :width="item._embedded['wp:featuredmedia'][0].media_details.width" :height="item._embedded['wp:featuredmedia'][0].media_details.height" />        
        <h3>{{ item.title.rendered }} </h3>        
        <p class="price" v-if="activeCountry === 'US'"><span class="bold">Price:</span> ${{ item.acf.USprice }}</p>
        <p class="price" v-if="activeCountry === 'UK'"><span class="bold">Price:</span> £{{ item.acf.UKprice }}</p>
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
        justify-content: flex-end;
        align-items: center;
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
        height: auto;
        width: auto;
        max-height: 200px;
        max-width: 200px;
        object-fit: cover; 
    }
    .description {
        text-align: justify;
        font-size: 0.88em;
        padding-top: 0.5em;
    }
}
@media only screen and (min-width: 700px) {
    .shopItem {        
        margin-bottom: 0em;
        width: 100%;
        height: 100%;
    }

    .image {
        height: auto;
        width: auto;
        max-height: 200px;
        max-width: 200px;
    }
}
</style>

<script>
    import store from "@/store/index";
    import { mapState, mapGetters } from "vuex";
    export default {
        name: 'shopItem',
        props: ["item"],
        methods: {
            setActiveCountry: function(countryCode) {
                this.$store.dispatch("countryChange", countryCode);
            }
        },
  computed: {
    ...mapState(["activeCountry"]),
    ...mapGetters(["currentCountry"])
  }
    }
</script>