<template>
    <div id="product">
        <h1>Farm Products</h1>
        <div id="adultToggle">
        <label id="label">Show adult-only products</label>
        <aside>By revealing adult content, you declare that you are over 18</aside>
        <ToggleButton v-model="adultEnabled"/>
        </div>
        <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/shop_items?_embed=wp:term,wp:featuredmedia&item_type=14"/>
        <div v-if="adultEnabled === true">
            <h2>Alcohol</h2>
            <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/shop_items?_embed=wp:term,wp:featuredmedia&item_type=15"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
#adultToggle {
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
aside {
    color: rgb(83, 83, 83);
    font-style: italic;
    font-size: 0.8em;
    margin-bottom: 0.6em;
}
#label {
    margin-bottom: 0.6em;
}
</style>

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