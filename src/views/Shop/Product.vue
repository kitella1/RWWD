<template>
    <div id="product">
        <h1>Farm Products</h1>
        <!--Label required-->
        <ToggleButton v-model="adultEnabled"/>
        <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/shop_items?_embed=wp:term,wp:featuredmedia&item_type=14"/>
        <div v-if="adultEnabled === true">
            <h2>Alcohol</h2>
            <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/shop_items?_embed=wp:term,wp:featuredmedia&item_type=15"/>
        </div>
    </div>
</template>

<script>
    import GetData from "@/components/Shop/GetData";
    import { ToggleButton } from 'vue-js-toggle-button';

    export default {
        data() {
            return {
                adultEnabled: false
            }
        },
  components: {
      GetData,
      ToggleButton
        }
};
</script>