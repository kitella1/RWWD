<template>
    <div id="hero">
      <div id="controlPanel">
 <button class="navButton prev" @click="$refs.carousel.goToPrev()">&#60;</button>
        <button class="navButton next" @click="$refs.carousel.goToNext()">&#62;</button>        
        <agile id="carousel" ref="carousel" :autoplay="true" :autoplay-speed="5000" :dots="false" :navButtons="false">
          <div class="slide">
            <picture>
                <source media="(min-width: 900px)" srcset="@/assets/images/welcomeHeaderLarge.png">
                <source media="(min-width: 500px)" srcset="@/assets/images/welcomeHeaderMed.png">
                <img src="@/assets/images/welcomeHeader.png" alt="Welcome to McIntire Fruit's new website">
            </picture>
          </div>        
          <div class="slide">            
              <router-link
              class="routerButton"
              @click.native="setActivePage('shop')"
              to="/shop/merch"
            >
              <picture>
                <source media="(min-width: 900px)" srcset="@/assets/images/merchHeaderLarge.png">
                <source media="(min-width: 500px)" srcset="@/assets/images/merchHeaderMed.png">
                <img src="@/assets/images/merchHeader.png" alt="New McIntire Fruits merchandise out now">
            </picture>
            </router-link>
          </div>
          <div class="slide"> 
              <router-link
              class="routerButton"
              @click.native="setActivePage('events')"
              to="/events"
            >
            <picture>
                <source media="(min-width: 900px)" srcset="@/assets/images/berryHeaderLarge.png">
                <source media="(min-width: 500px)" srcset="@/assets/images/berryHeaderMed.png">
                <img src="@/assets/images/berryHeader.jpg" alt="Berry bonanza">
            </picture>
            </router-link>
          </div>
      </agile> 
      </div>
    </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 200px) {
  #controlPanel {
    width: 100%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-auto-rows: min-content;
    box-sizing: border-box;
  }

  #carousel {
    height: 100%;
    width: 100%;
    grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: span 1;  
  }

.navButton {
  display: none;
}
  
.prev {
  z-index: 2;
grid-column-start: 1;
grid-column-end: span 1;
}

.next {
  z-index: 2;
grid-column-start: 3;
grid-column-end: span 1;
} 

  img {
    width: 100%;    
    height: auto;
}
}
@media only screen and (min-width: 700px) {
  .navButton {
    background: transparent;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 24px;
		transition-duration: .3s;
    height: 99%;
    grid-row-start: 1;
    grid-row-end: span 1;
  }
}
@media only screen and (min-width: 1000px) {
.navButton:hover {
			background-color: rgba(#000, .5);
			opacity: 1;
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