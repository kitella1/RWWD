<template>
  <div id="product">
    <h1>Products</h1>
    <span id="produce" class="navContainer">
      <img class="image" src="@/assets/images/lime.jpg" width="4" height="3" />
      <p class="label">Produce</p>
    </span>
    <span id="products" class="navContainer">
      <img class="image" src="@/assets/images/jam.jpg" width="4" height="3" />
      <p class="label">Farm Products</p>
    </span>
    <span id="merch" class="navContainer">
      <img class="image" src="@/assets/images/shirts.jpg" width="4" height="3" />
      <p class="label">Merchandise</p>
    </span>
    <router-link class="routerButton" @click.native="setActivePage('products')" to="/juice">
      <span id="juice" class="navContainer">
        <img class="image" src="@/assets/images/juice.jpg" width="4" height="3" />
        <p class="label">Juice</p>
      </span>
    </router-link>
  </div>
</template>

<style lang="scss">


@media only screen and (min-width: 200px) {
  #logo
  {
    width: 20%;
    height: auto;
    margin-top: 0.6em;
  }
  
  h1 {
    font-size: 7vw;
    color: $primaryBlack;
    padding: 0.3em 1em 0em;
    text-transform: uppercase;
  }

  #product {
    margin-bottom: 12vh;
  }

  .image {
    width: 80%;
    padding: 1em;
    height: auto;
    border-radius: 20px;
    filter: brightness(50%);
  }
  .navContainer {
    position: relative;
    text-align: center;
    width: 70%;
  }

  .label {  
    position: absolute;
    color: white;
    bottom: 10px;
    left: 30px;
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase;
    text-align: left;
  }
}
</style>

<script>
import store from "../store/index";
import { mapState, mapGetters } from "vuex";

export default {
  name: "produce",
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