<template>
    <div id="about">
        <h1>Welcome to McIntire Fruits</h1>
    <div id="grid">
        <img class="image" src="@/assets/images/apples.jpg" alt="a pile of apples" />
        <div class="paragraph">
          <h2>Fresh and Delicious</h2>
          <p>Seasonal produce is grown at all McIntire Farms. From crunchy carrots to sweet strawberries, all the stock in our shops is grown on-site and sold as fresh as you'd eat it yourself - or your money back.</p>
          <router-link
            class="routerButton"
            @click.native="setActivePage('shop')"
            to="/shop/produce"
          >What's available?</router-link>
        </div>
        <img class="image" src="@/assets/images/berries.jpg" alt="grapes hanging from vines" />
        <div class="paragraph">
          <h2>Pick-Your-Own-Produce</h2>
          <p>Don't just hear it through the grapevine; pick it yourself! Simply purchase a container and fill it as high as you can. Family prices are available for those with more mouths to feed. Be sure to attend the Berry Bonanza on weekends for even bigger discounts. Berry Bonanza is available at all McIntire Fruit Farms.</p>
          <router-link
            class="routerButton"
            @click.native="setActivePage('events')"
            to="/events"
          >Learn more</router-link>
        </div>        
        <img class="image" src="@/assets/images/cow.jpg" alt="a cow in a field" />
        <div class="paragraph">
          <h2>Scottish Roots</h2>
          <p>McIntire Fruits was born and continues to grow in the heart of Scotland. Even as we expand, McIntire Fruits remain faithful to our Scottish Lowlands heritage. New farms are opening globally so keep an eye out for the McIntire brand where you are too.</p>
          <router-link
            class="routerButton"
            @click.native="setActivePage('events')"
            to="/events"
          >Dig deeper</router-link>
        </div>
        <img class="image" src="@/assets/images/child.jpg" alt="a pile of apples" />
        <div class="paragraph">
          <h2>Family Friendly</h2>
          <p>While we're open to all ages, McIntire Fruits pride ourselves on welcoming even the smallest of farmers. Whether you're 5, 15, or 50, there's bound to be something for everyone.</p>
          <router-link
            class="routerButton"
            @click.native="setActivePage('kids')"
            to="/kids"
          >See More</router-link>
        </div>        
      </div>
  </div>
</template> 

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

    @media only screen and (min-width: 200px) {
        h1 {
            font-weight: 300;
            padding: 0em 1.4em;
            letter-spacing: 2px;
            font-family: 'Lobster', Courier, monospace;
        }
      .image {
    width: 100%;
    height: auto;
  }
  .paragraph {
    padding: 0em 1.4em;
  }

  .routerButton {
    display: block;
    margin: 0 auto;
     padding: 0.6em;
     width: 75%;
    border-radius: 40px;
    background: $secondary;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.8em;
    text-align: center;
    line-height: 2em;
    margin-bottom: 5vh;
  }
    }

    @media only screen and (min-width: 500px) {
        h1 {
            letter-spacing: 4px;
            font-size: 2em;
        }

        #grid {
            width: 60%;
        }

        #about {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
        }
        .image {
          border-radius: 5px;
        }
    }

    @media only screen and (min-width: 700px) {
        h1 {
            font-size: 3em;
        }

        

        #grid {
            display: grid;
            grid-template-columns: 45% 55%;
            row-gap: 1em;
            align-items: center;
            width: 80%;
        }

        .routerButton {
            padding: 0.4em;
        }

        .image {
            width: 100%;
            align-self: center;
        }
    }
    @media only screen and (min-width: 1000px) {
        #about {
            padding-left: 15vw;
            padding-right: 15vw;
        }

        #grid {
            margin-bottom: 5vw;
        }
}
</style>

<script>
import store from "@/store/index";
import { mapState, mapGetters } from "vuex";

export default {
  name: "About",
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