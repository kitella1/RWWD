<template>
    <agile id="carousel" :autoplay="false" :dots="true" :navButtons="false">
        <div class="slide">
            <router-link
            class="routerButton"
            @click.native="setActivePage('events')"
            to="/events"
          ><img src="@/assets/images/hero1.jpg" alt="The poster for the Berry Bonanza" /></router-link>
        </div>        
        <div class="slide">
            
            <router-link
            class="routerButton"
            @click.native="setActivePage('events')"
            to="/events"
          ><img src="@/assets/images/hero2.jpg" alt="The poster for the Conservation Rally" /></router-link>
        </div>
        <div class="slide">            
            <router-link
            class="routerButton"
            @click.native="setActivePage('events')"
            to="/events"
          ><img src="@/assets/images/hero3.png" alt="The poster for the Make Your Own Carrot Juice Tutorial Evening" /></router-link>
        </div>
    </agile>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 200px) {
    #carousel {
        display: none;
    }
}
@media only screen and (min-width: 700px) {
    
#carousel {
        display: none;
    }   
img {
    width: 100%;
    height: auto;
    display: none;
}

}
</style>

<script>
import store from "@/store/index";
import { mapState, mapGetters } from "vuex";
import { VueAgile } from 'vue-agile'
export default {
    components: {
        agile: VueAgile 
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
}
</script>