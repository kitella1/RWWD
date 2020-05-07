<template>
    <div id="app">
        <header v-if="this.activePage != 'kids'">
            <div id="main">
                <router-link to="/"><img id="logo"  alt="Mcintire Fruits logo" src="@/assets/images/logo-1x.png"></router-link>
                <div id="nav">
                    <router-link to="/" >Home</router-link>|
                    <router-link to="/about">About</router-link>|
                    <router-link to="/shop">Shop</router-link>|
                    <router-link to="/kids">Kids</router-link>|
                    <router-link to="/events">Events</router-link>
                </div>
                <p class="country" @click="setActiveCountry('UK')"  v-if="activeCountry === 'US'">
                    <img src="@/assets/images/gb.jpg" class="flag" alt="The British flag" width="500" height="333">
                    Go to UK site
                </p>
                <p class="country" @click="setActiveCountry('US')"  v-if="activeCountry === 'UK'" >
                    <img src="@/assets/images/us.jpg" class="flag" alt="The American flag" width="500" height="333">
                    Go to US site
                </p>
            </div>
            <div id="details">
                <p>Monday to Friday - 10:00 to 16:00</p>
                <p>Saturday and Sunday - 11:00 to 14:00</p>
                <p v-if="activeCountry === 'UK'">Telephone: <a href="tel:+441334123456">+44 1334 12 34 56</a></p>
                <p v-if="activeCountry === 'US'">Telephone: <a href="tel:+19277723645">+1 927 772 3645</a></p>
            </div>
        </header>
        <mq-layout :mq="['smallMobile', 'mobile']">
            <router-view />
            <Footer />
            <MobileNavBar />
        </mq-layout>
        <mq-layout mq="tablet+">            
            <router-view />
            <Footer/>
        </mq-layout>
    </div>
</template>

<style lang="scss">    
#app {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

@media only screen and (min-width: 200px) {
    #logo {
        width: 15vw;
        padding: 0.5em;
        height: auto;
    }

    .country {
        display: flex; 
        flex-direction: column;
        align-items: center;
        font-size: 0.7em;
    }
    
    .flag {
        width: 30px;
        height: 20px;
    }

    header {
        justify-content: space-evenly;
        padding-top: 0.4em;
        background: white;
        width: 100%;
        box-shadow: 0px -20px 37px 0px rgba(0,0,0,0.75);
    }

    #main {        
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    #nav, #details {
        display: none;
    }

    body {
        margin: 0;
    }
}

    @media only screen and (min-width: 600px) {
    #logo {
            width: 10vw;
    }

    #main {        
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding-left: 2em;
        padding-right: 2em;
    }

    #details {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size: 0.7em;
        & p {
            margin-top: 0;
        }
    }

    #nav {
        display: flex;
        justify-content: space-evenly;
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
        margin: 0em 2em 0em 2em;
    }
}
@media only screen and (min-width: 1000px) {
    #logo {
        width: 5vw;
    }

    #details {
        font-size: 0.9em;
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
    },
    setActiveCountry: function(countryCode) {
      this.$store.dispatch("countryChange", countryCode);
    }
  },
  computed: {
    ...mapState(["activePage", "activeCountry"]),
    ...mapGetters(["currentPage", "currentCountry"])
  }
};
</script>
