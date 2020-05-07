<template>
    <div id="facts">
        <h2>Facts</h2>
    <div id="grid" >
        <div class="gridItem">
            <transition name="bounce">
            <img key=1 class="icon" v-if="this.facts[0].visible === 'No'" src="@/assets/images/appleIcon.png" @click="toggleFact(0)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[0].visible === 'Yes'" @click="toggleFact(0)">Apples are made up of 1/4 air, which is why they float so well.</p>
            </transition>
        </div>
        <div class="gridItem">
            <transition key=2 name="bounce">
            <img class="icon"  v-if="this.facts[1].visible === 'No'" src="@/assets/images/bananaIcon.png" @click="toggleFact(1)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[1].visible === 'Yes'" @click="toggleFact(1)">A banana is a berry - but a strawberry is not!</p>
            </transition>
        </div>
        <div class="gridItem">
            <transition key=2 name="bounce">
            <img class="icon"  v-if="this.facts[2].visible === 'No'" src="@/assets/images/strawbIcon.png" @click="toggleFact(2)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[2].visible === 'Yes'" @click="toggleFact(2)">A strawberry can contain around 200 seeds!</p>
            </transition>
        </div>
        <div class="gridItem">
            <transition key=2 name="bounce">
            <img class="icon"  v-if="this.facts[3].visible === 'No'" src="@/assets/images/broccoIcon.png" @click="toggleFact(3)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[3].visible === 'Yes'" @click="toggleFact(3)">Dark green vegetables have more vitamin C than dark green vegetables.</p>
            </transition>
        </div>
        <div class="gridItem">
            <transition key=2 name="bounce">
            <img class="icon"  v-if="this.facts[4].visible === 'No'" src="@/assets/images/appleIcon2.png" @click="toggleFact(4)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[4].visible === 'Yes'" @click="toggleFact(4)">There are over 7000 kinds of apples grown all over the world.</p>
            </transition>
        </div>
        <div class="gridItem">
            <transition key=2 name="bounce">
            <img class="icon"  v-if="this.facts[5].visible === 'No'" src="@/assets/images/pineIcon.png" @click="toggleFact(5)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[5].visible === 'Yes'" @click="toggleFact(5)">A pineapple will ripen faster if you stand it upside down, with the leaves facing down.</p>
            </transition>
        </div>
        <div class="gridItem">
            <transition key=2 name="bounce">
            <img class="icon"  v-if="this.facts[6].visible === 'No'" src="@/assets/images/blackIcon.png" @click="toggleFact(6)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[6].visible === 'Yes'" @click="toggleFact(6)">Blackberry juice was used to dye clothes shades of blue and indigo.</p>
            </transition>
        </div>
        <div class="gridItem">
            <transition key=2 name="bounce">
            <img class="icon"  v-if="this.facts[7].visible === 'No'" src="@/assets/images/cucumberIcon.png" @click="toggleFact(7)" width="500" height="500" alt="an icon of an apple" />
            <p v-if="this.facts[7].visible === 'Yes'" @click="toggleFact(7)">A cucumber is a fruit.</p>
            </transition>
        </div>
        
    </div>
    <p>Lots of these fruits are available in juices!</p> <p> Be careful though, these sometimes have lots of sugar.</p>
    <aside>Parents: find out more nutritional information <router-link @click.native="setActivePage('shop')" to="/shop/juice">here</router-link>.</aside>
    </div>
</template>

<style lang="scss" scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@media only screen and (min-width: 300px) {
#facts {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    margin: 1em;
}

 #grid {
     display: grid;
     width: 90vw;
     grid-template-columns: 50% 50%;
     align-items: center;
 }

 .icon {
     object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: auto;
 }

 aside {
     font-size: 0.6em;
     opacity: 0.5;
 }

 aside a {
     color: white;
 }

.bounce-enter,
 .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave,
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
}
@media only screen and (min-width: 500px) {
    #grid {
     display: grid;
     width: 90vw;
     grid-template-columns: 25% 25% 25% 25%;
     align-items: center;
 } 
}
@media only screen and (min-width: 1000px) {
    #grid {
     width: 50vw;
     grid-template-columns: 25% 25% 25% 25%;
     align-items: center;
 }
}
</style>

<script>
import store from "@/store/index";
import { mapState, mapGetters } from "vuex";
export default {
    data () {
        return {
            facts : [
                {visible: "No"},
                {visible: "No"},
                {visible: "No"},
                {visible: "No"},
                {visible: "No"},
                {visible: "No"},
                {visible: "No"},
                {visible: "No"}
            ]
        }
    },
    methods: {
    toggleFact: function(factNum) {
        if(this.facts[factNum].visible === "Yes")
        {
            this.facts[factNum].visible = "Pending animation"
            setTimeout(() => {  this.facts[factNum].visible = "No"; }, 500);    
        }
        else if(this.facts[factNum].visible === "No")
        {
            this.facts[factNum].visible = "Pending animation"
            setTimeout(() => {  this.facts[factNum].visible = "Yes"; }, 500);    
        }
    },
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