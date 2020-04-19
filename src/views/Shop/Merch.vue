<template>
    <div id="merch">
        <h1>Merchandise</h1>
        <ShopItem image="merch/mug" title="McIntire Fruits Mug" description="Perfect for any beverage." price='5' currency="UK" />
        <ShopItem image="merch/hoodie" title="McIntire Fruits Hoodie" description="Cosy and snug." price='20' currency="UK" />
        <ShopItem image="merch/shirt" title="McIntire Fruits Shirt" description="Stylish and comfortable. 100% organic cotton" price='15' currency="UK" />
        <ShopItem image="merch/hat" title="McIntire Fruits Cap" description="Keep that summer sunshine out of your eyes." price='8' currency="UK" />
    </div>
</template>

<script>
    import ShopItem from "@/components/Shop/ShopItem";

export default {
  components: {
            ShopItem
        }
};
</script>