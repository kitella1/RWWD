<template>
    <div id="merch">
        <h1>Merchandise</h1>
        <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/shop_items?_embed=wp:term,wp:featuredmedia&item_type=12"/>
    </div>
</template>

<script>
    import GetData from "@/components/Shop/GetData";

export default {
  components: {
            GetData
        }
};
</script>