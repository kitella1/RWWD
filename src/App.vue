<template>
    <div id="app">
        <header>
            <img id="logo" alt="Mcintire Fruits logo" src="@/assets/images/logo-1x.png">
        </header>
        <mq-layout :mq="['smallMobile', 'mobile']">
            <router-view />
            <Footer/>
            <MobileNavBar />
        </mq-layout>
        <mq-layout mq="tablet+">
            <div id="nav">
                <router-link to="/">Home</router-link>|
                <router-link to="/about">About</router-link>|
                <router-link to="/shop">Shop</router-link>|
                <router-link to="/kids">Kidz Zone</router-link>|
                <router-link to="/events">Events</router-link>
            </div>
            <router-view />
            <Footer />
        </mq-layout>
    </div>
</template>

<style lang="scss">
    #logo {
        width: 20vw;
        height: auto;
    }
    #app {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

        // #app > div {
        //     margin: 8px;
        // }

    body {
        margin: 0;
    }

    @media only screen and (max-width: 320px) {
        
    }
</style>

<script>
    import MobileNavBar from "@/components/MobileNavbar.vue";
    import Footer from "@/components/Footer.vue";
export default {
  components: {
        MobileNavBar,
      Footer
  },
  computed: {
    setActivePage: function(pageName) {
      this.$store.commit("setActivePage", pageName);
    }
  }
};
</script>
