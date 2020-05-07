<template>
    <footer id="footer" v-if="this.activePage != 'kids'">
        <button @click="toggleHours()">
            <p>Opening Hours</p>  
            <ul v-if="showHours" class="column">
                <li><h2>Opening hours</h2></li>
                <li><p>Monday to Friday - 10:00 to 16:00</p></li>
                <li><p>Saturday and Sunday - 11:00 to 14:00</p></li>
            </ul>
        </button>
        <button @click="toggleContact()">
            <p>Contact Us</p>
            <ul v-if="showContact" class="column">
                <li><h2>Contact Us</h2></li>
                <li><p>E-mail: <a href="mailto:enquiries@mcintirefruit.org">enquiries@mcintirefruit.org</a></p></li>
                <li v-if="activeCountry === 'UK'"><p>Telephone: <a href="tel:+441334123456">+44 (0) 1334 12 34 56</a></p></li>
                <li v-if="activeCountry === 'US'"><p>Telephone: <a href="tel:+19277723645">+1 927 772 3645</a></p></li>
            </ul>
        </button> 
        <button @click="toggleSitemap()">
            <p>Sitemap</p>
            <ul id="sitemap" v-if="showSitemap" class="column">
                <li><h2>Sitemap</h2></li>
                <li><router-link @click.native="setActivePage('home')" to="/home">Home</router-link></li>
                <li><router-link @click.native="setActivePage('about')" to="/about">About us</router-link></li>
                <li><router-link @click.native="setActivePage('shop')" to="/shop/produce">Produce</router-link></li>
                <li><router-link @click.native="setActivePage('shop')" to="/shop/merch">Merchandise</router-link></li>
                <li><router-link @click.native="setActivePage('shop')" to="/shop/products">Farm products</router-link></li>
                <li><router-link @click.native="setActivePage('shop')" to="/shop/juices">Juices</router-link></li>
                <li><router-link @click.native="setActivePage('kids')" to="/kids">Kidz Zone</router-link></li>
                <li><router-link @click.native="setActivePage('events')" to="/events">Events</router-link></li>
            </ul>
        </button>
        <ul id="finePrint">
            <li><p>McIntire Fruits, Cairnie, Cupar, KY15 4QD</p></li>
        </ul>
        <div id="socialMedia">
            <img class="icon" width="64" height=64 src="@/assets/images/twitter.png" alt="The Twitter logo"/>
            <img class="icon" width="64" height=64 src="@/assets/images/facebook.png" alt="The Facebook logo"/>
            <img class="icon" width="64" height=64 src="@/assets/images/instagram.png" alt="The Instagram logo"/>
        </div>
        <ul id="copyright" class="column">
            <li><p>Copyright &copy; 2020 McIntire Fruits</p></li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
@media only screen and (min-width: 320px) {
        * 
        {    
           color: #cccccc;
        }
        #footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgb(65, 65, 65);
            color: white;
            padding-bottom: 8vh;
        }
        h2 {
            display: none;
        }        
        p {
            margin: 0;
        }
        button {
            background: none;
            border: none;
            border-bottom: #a7a7a7 1px solid;
            padding: 1em;
            width: 100%;
        }
        button > p {            
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.9px;            
            font-size: 0.8em;
        }
        .column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            list-style: none;
            text-align: justify;
            font-size: 0.9em;
        }
        #sitemap li {
            padding: 0.2em;
        }
        #sitemap a {
            text-decoration: none;
            text-transform: uppercase;
        }
        #socialMedia {
            display: flex;
            justify-content: space-around;            
            width: 75%;
        }
        .icon {
            height: 30px;
            width: auto;    
            filter: drop-shadow(6px 6px 10px rgba(48, 48, 48, 0.9))
        }
        #finePrint
        {
            list-style: none;
            font-size: 0.7em;
            padding-left: 1em;
        }
        #copyright
        {
            font-size: 0.6em;
            padding-left: 1em;
            opacity: 0.7;
        }
        @media only screen and (min-width: 1024px) {
           #socialMedia {
            justify-content: space-around;
            width: 20%;
        } 
        }
    }
</style>

<script>
    import store from "@/store/index";
    import { mapState, mapGetters } from "vuex";

export default {
    name: "Footer",
    data: function () {
        return {            
        showAddress: false,
        showHours: false,
        showContact: false,
        showSitemap: false
        }   
    },
    methods: {
        setActivePage: function(pageName) {
      this.$store.dispatch("pageChange", pageName);
    },
        toggleAddress: function(){
            this.showAddress = !this.showAddress;
            this.showContact = false;
            this.showSitemap = false;
            this.showHours = false;
        },
        toggleHours: function(){
            this.showHours = !this.showHours;
            this.showContact = false;
            this.showAddress = false;
            this.showSitemap = false;
        },
        toggleContact: function(){
            this.showContact = !this.showContact;
            this.showHours = false;
            this.showAddress = false;
            this.showSitemap = false;
        },
        toggleSitemap: function(){
            this.showSitemap = !this.showSitemap;
            this.showContact = false;
            this.showAddress = false;
            this.showHours = false;
        },
    },
  computed: {
    ...mapState(["activePage", "activeCountry"]),
    ...mapGetters(["currentPage", "currentCountry"])
  }
}
</script>