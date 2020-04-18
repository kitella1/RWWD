<template>
    <div id="juice">
        <h1>Juices</h1>
        <ShopItem image="appleMuffin" title="Apple Juice" description="Tasty, crisp, and sweet" price="3"/>
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