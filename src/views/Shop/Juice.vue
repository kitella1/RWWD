<template>
    <div id="juice">
        <h1>Juices</h1>
        <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/shop_items?_embed=wp:term,wp:featuredmedia&item_type=13"/>
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