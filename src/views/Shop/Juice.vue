<template>
    <div id="juice">
        <h1>Juices</h1>
        <ShopItem image="juice/apple" title="Apple Juice" description="Tasty, crisp, and sweet." price='3' currency="UK"/>
        <ShopItem image="juice/orange" title="Orange Juice" description="Tangy and fresh." price='3' currency="UK"/>
        <ShopItem image="juice/rasp" title="Raspberry Juice" description="Sticky sweet goodness." price='3' currency="UK"/>
        <ShopItem image="juice/strawb" title="Strawberry Juice" description="Beautiful berry goodness" price='3' currency="UK"/>
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