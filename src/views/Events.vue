<template>
  <div class="events">
    <h1>Events</h1>
    <div id="adultToggle">
        <label id="label">Show adult-only products</label>
        <aside>By revealing adult content, you declare that you are over 18</aside>
        <ToggleButton v-model="adultEnabled"/>
        </div>
    <!--Sort by date order -->
    <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/events?_embed=wp:term,wp:featuredmedia&categories=10"/>
        <div v-if="adultEnabled === true">
            <h2>Adult-only Events</h2>
            <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/events?_embed=wp:term,wp:featuredmedia&categories=7"/>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 200px) {
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
}
</style>

<script>
    import GetData from "@/components/Events/GetData";
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