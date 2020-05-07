<template>
    <div id="shop">
        <h1>What are you in the market for?</h1>

        <router-link @click.native="setActivePage('shop')" to="/shop/produce">
        <span id="produce" class="navContainer">
        <img class="image" src="@/assets/images/lime.jpg" width="4" height="3" />
        <p>Produce</p>
      </span>
      </router-link>

        <router-link @click.native="setActivePage('shop')" to="/shop/product">
        <span id="products" class="navContainer">
        <img class="image" src="@/assets/images/jam.jpg" width="4" height="3" />
        <p>Farm Products</p>
      </span>
      </router-link>

        <router-link @click.native="setActivePage('shop')" to="/shop/merch">
          <span id="merch" class="navContainer">
        <img class="image" src="@/assets/images/shirts.jpg" width="4" height="3" />
        <p>Merchandise</p>
      </span>
        </router-link>

        <router-link class="routerButton" @click.native="setActivePage('shop')" to="shop/juice">
      <span id="juice" class="navContainer">
        <img class="image" src="@/assets/images/juice.jpg" width="4" height="3" />
        <p>Kids Juices</p>
      </span>

    </router-link>
    </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 200px) {
  #product {
    margin-bottom: 12vh;
  }

  .image {
    width: 80%;
    padding: 1em;
    height: auto;
    border-radius: 25px;
    filter: brightness(50%);
  }
  .navContainer {
    position: relative;
    text-align: center;
    width: 70%;
  }

  .navContainer p {
    position: absolute;
    color: white;
    bottom: 0px;
    left: 30px;
    font-weight: bold;
    font-size: 1.6em;
    text-transform: uppercase;
    text-align: left;
  }
}
@media only screen and (min-width: 700px) {
  #shop {
                display: grid;
                grid-template-columns: 50% 50%;
                align-items: center;
                padding: 0em 5em;
            }
            h1 {
                grid-column-start: 1;
                grid-column-end: 3;
            }
}

@media only screen and (min-width: 1000px) {

  #shop {
    padding-left: 15vw;
            padding-right: 15vw;
            padding-bottom: 5vh;
  }
 
}
</style>

<script>
    import store from "../store/index";
    import { mapState, mapGetters } from "vuex";
export default {
  name: "shop",
  props: {},
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