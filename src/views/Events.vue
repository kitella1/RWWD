<template>
  <div class="events">
    <h1>Events</h1>
    <ToggleButton v-model="adultEnabled"/>
    <!--Sort by date order -->
    <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/events?_embed=wp:term,wp:featuredmedia&categories=10"/>
        <div v-if="adultEnabled === true">
            <h2>Adult-only Events</h2>
            <GetData url="https://studentweb.staffs.ac.uk/a010743g/mcintireFruits/wp-json/wp/v2/events?_embed=wp:term,wp:featuredmedia&categories=7"/>
        </div>
  </div>
</template>

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