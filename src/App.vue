<template>
  <div id="app">
    <mq-layout :mq="['smallMobile', 'mobile']">
      <router-view />
      <MobileNavBar />
    </mq-layout>
    <mq-layout mq="tablet+">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/produce">Produce</router-link>|
        <router-link to="/kids">Kidz Zone</router-link>|
        <router-link to="/events">Events</router-link>|
      </div>
      <router-view />
    </mq-layout>
  </div>
</template>

<style lang="scss">
    @media only screen and (max-width: 320px) {
        #app {
            font-family: Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
        }

            #app > div {
                margin: 8px;
            }

        body {
            margin: 0;
        }
    }
</style>

<script>
import MobileNavBar from "@/components/MobileNavbar.vue";
export default {
  components: {
    MobileNavBar
  },
  computed: {
    setActivePage: function(pageName) {
      this.$store.commit("setActivePage", pageName);
    }
  }
};
</script>
