<template>
    <div id="app">
        <header v-if="this.activePage != 'kids'">
            <router-link to="/"><img id="logo"  alt="Mcintire Fruits logo" src="@/assets/images/logo-1x.png"></router-link>
            <div id="nav">
                <router-link to="/" >Home</router-link>|
                <router-link to="/about">About</router-link>|
                <router-link to="/shop">Shop</router-link>|
                <router-link to="/kids">Kidz Zone</router-link>|
                <router-link to="/events">Events</router-link>
            </div>
        </header>
        <mq-layout :mq="['smallMobile', 'mobile']">
            <router-view />
            <Footer v-if="this.activePage != 'kids'" />
            <MobileNavBar />
        </mq-layout>
        <mq-layout mq="tablet+">            
            <router-view />
            <Footer v-if="this.activePage != 'kids'" />
        </mq-layout>
    </div>
</template>

<style lang="scss">

@media only screen and (min-width: 200px) {
    #logo {
        width: 20vw;
        height: auto;
    }

header {
    padding-top: 1em;
}
    #app {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    #nav {
        display: none;
    }

    body {
        margin: 0;
    }
}

    @media only screen and (min-width: 600px) {
        #logo {
            width: 10vw;
            margin-left: 3em;
    }
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    #nav {
  display: flex;
  justify-content: space-between;
  padding: 0em 1em;
  text-decoration: none;
  align-items: center;
  a {
    font-weight: bold;
    stroke: $font;
    text-transform: uppercase;
    color: $font;
    text-decoration: none;
    transition-duration: 0.3s;
    transition-property: transform;
    box-shadow: -2px 200px 105px -138px rgba(0, 0, 0, 0.75);
    &.router-link-exact-active {
      stroke: $primary;
      fill: $primary;
      color: $primary;
    }
  }
  flex-grow: 0.6;
  margin: 0em 2em 0em 10em;
}

    }
    @media only screen and (min-width: 1000px) {
        #logo {
            width: 5vw;
        }

        #nav {
            justify-content: space-evenly;
        }
    }
</style>

<script>
    import MobileNavBar from "@/components/MobileNavbar.vue";
    import Footer from "@/components/Footer.vue";
    import store from "@/store/index";
    import { mapState, mapGetters } from "vuex";

export default {
  components: {
        MobileNavBar,
      Footer
  },
  methods: {
    setActivePage: function(pageName) {
      this.$store.dispatch("pageChange", pageName);
    }
  },
  computed: {
    ...mapState(["activePage"]),
    ...mapGetters(["currentPage"])
  }
};
</script>
