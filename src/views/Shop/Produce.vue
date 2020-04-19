<template>
    <div id="produce">
        <h1>Produce</h1>
        <ShopItem image="produce/apples" title="Apples" description="Grown seasonally." price='2 per punnet' currency="UK" />
        <ShopItem image="produce/bb" title="Blackberries" description="Grown seasonally." price='3 per punnet' currency="UK" />
        <ShopItem image="produce/cherries" title="Cherries" description="Grown seasonally." price='3 per punnet' currency="UK" />
        <ShopItem image="produce/rasp" title="Raspberries" description="Grown seasonally." price='1.50 per punnet' currency="UK" />
        <ShopItem image="produce/strawb" title="Strawberries" description="Grown seasonally." price='1.50 per punnet' currency="UK" />
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