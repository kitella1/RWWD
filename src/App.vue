<template>
    <div id="app">
        <header v-if="this.activePage != 'kids'">
            
            <div id="details">
                    <p>Monday to Friday - 10:00 to 16:00</p>
            <p>Saturday and Sunday - 11:00 to 14:00</p>
                    <p>Telephone: <a href="tel:+441334123456">+44 (0) 1334 12 34 56</a></p>
            <img src="@/assets/images/gb.png" v-if="activeCountry === 'US'" @click="setActiveCountry('UK')" class="flag" alt="The British flag" width="500" height="333">
            <img src="@/assets/images/us.png" v-if="activeCountry === 'UK'" @click="setActiveCountry('US')" class="flag" alt="The American flag" width="500" height="333">
            </div>
            <div id="main">
            <router-link to="/"><img id="logo"  alt="Mcintire Fruits logo" src="@/assets/images/logo-1x.png"></router-link>
            <div id="nav">
                <router-link to="/" >Home</router-link>|
                <router-link to="/about">About</router-link>|
                <router-link to="/shop">Shop</router-link>|
                <router-link to="/kids">Kidz Zone</router-link>|
                <router-link to="/events">Events</router-link>
            </div>
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

@media only screen and (min-width: 200px) {
    #logo {
        width: 15vw;
        padding: 1em;
        height: auto;
    }

header {
    padding-top: 0.5em;
    background: white;
    width: 100%;
    box-shadow: 0px -20px 37px 0px rgba(0,0,0,0.75);
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
    #main {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

.flag {
    width: 30px;
    height: 20px;
}


#details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
#details p {
    margin: 0;
    font-size: 0.6em;
}

#opening {
    display: flex; 
    justify-content: space-evenly;
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
            width: 3.5vw;
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
