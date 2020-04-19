<template>
    <div id="product">
        <h1>Farm Products</h1>
        <!--Label required-->
        <ToggleButton v-model="adultEnabled"/>
        <ShopItem image="products/appleMuffin" title="Apple and Cinnamon Muffin" description="The original recipe, as made famous by Molly McIntire." price='1' currency="UK" />
        <ShopItem image="products/cherryMuffin" title="Cherry Muffin" description="A twist on an old favourite." price='1' currency="UK" />
        <ShopItem image="products/scones" title="Scones with Strawberry Jam and Clotted Cream" description="A Devonshire classic with Scotland at its center." price='1.50' currency="UK" />
        <ShopItem image="products/appleTart" title="Apple Tart" description="Lovingly created from our orchard's apples." price='3' currency="UK" />
        <div v-if="adultEnabled === true">
            <ShopItem image="products/alcohol/gin" title="Strawberry Gin" description="Homemade gin with a sweet twist." price='18' currency="UK" />
            <ShopItem image="products/alcohol/vodka" title="Vodka" description="Homemade potato vodka." price='20' currency="UK" />
            <ShopItem image="products/alcohol/wine" title="Elderflower Wine" description="Elderflower wine made from our very own elderberries." price='15' currency="UK" />
            <ShopItem image="products/alcohol/cider" title="Apple Cider" description="Beautiful and tart apple cider." price='6' currency="UK" />
        </div>
    </div>
</template>

<script>
    import ShopItem from "@/components/Shop/ShopItem";
    import { ToggleButton } from 'vue-js-toggle-button';

    export default {
        data() {
            return {
                adultEnabled: false
            }
        },
  components: {
      ShopItem,
      ToggleButton
        }
};
</script>