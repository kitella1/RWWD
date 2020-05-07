<template>
<div id="wrapper">
    <div id="kids">        
        <img id="splash" src="@/assets/images/fruitsplash.png"/>
        <h1>Kidz Zone</h1>
        <div id="buttons">
            <div class="buttonGrid">
                <button id="gamesButton" class="button" v-scroll-to="'#fruitGame'">            
                    <p>Games</p>
                </button>               
                <img id="dice" src="@/assets/images/dice.png" role="presentation" alt="cartoon graphics of dice"/>     
            </div>
            <div class="buttonGrid">
                <button id="factsButton" class="button" v-scroll-to="'#facts'">            
                    <p>Fun Facts</p>
                </button>               
                <img id="bulb" src="@/assets/images/lightbulb.png" role="presentation" alt="cartoon graphics of a lightbulb"/>     
            </div>
        </div>
        <Facts id="facts" />
        <Game id="fruitGame" />
    </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
    
* {
    font-family: 'Patrick Hand', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}

@media only screen and (min-width: 200px) {
    #wrapper {
        width: 100vw;
        height: 100%;
        display: flex; 
        flex-direction: column;
        align-items: center;
        background-image: url('~@/assets/images/sun.png');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    h1 {
        margin-top: 0;
        font-size: 3em;
    }

#kids {
    background: #454E9E;
    padding-bottom: 5em;
    box-shadow: -50px 0 50px -50px #333, 50px 0 50px -50px #333;
}

#splash {
    width: 100%;
}

#buttons {
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-around;
}

.buttonGrid {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 15% 35% 35% 15%;
    height: 80px;
    margin-bottom: 1em;
}

#gamesButton, #factsButton {
    background: #F00699;
    border: rgb(216, 0, 137) solid 8px;
    border-radius: 50px;
    grid-column-start: 2;
    grid-row-start: 1;
    grid-column-end: span 2;
    box-shadow: 0px 6px 0px rgb(192, 1, 122), 0px 3px 15px rgba(0,0,0,.4);
}

#gamesButton:active, #factsButton:active {
    box-shadow: none;
}

#gamesButton p, #factsButton p {
    margin: 0;
    font-size: 3em;
    padding-left: 1.5em;
}

#dice, #bulb {
    z-index: 1;
    object-fit: cover;
    width: 80%;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: span 2;
    transform: rotate(-25deg);
    justify-self: center;
    align-self: center;
}

#bulb {
    width: 50%;    
}

}

@media only screen and (min-width: 500px) {
    #buttons {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        height: 30vh;
    }

    .buttonGrid {
        width: 50%;
    }

    #gamesButton p, #factsButton p {
    font-size: 2em;
}
}
@media only screen and (min-width: 1000px) {
    #kids {
        padding-top: 5em;
        width: 70vw;
    }
    #splash {
        display: none;
    }

}
</style>

<script>
    import Facts from "@/components/KidzZone/Facts.vue";
    import Game from "@/components/KidzZone/Game.vue";    
    import store from "../store/index";
    import { mapState, mapGetters } from "vuex";

    export default {
        components: {
            Facts,
            Game
        },
        methods: {
            setActivePage: function(pageName) {
                this.$store.dispatch("pageChange", pageName);
            }
        },
        created() {
            this.setActivePage('kids');
        },
        computed: {
            ...mapState(["activePage"]),
            ...mapGetters(["currentPage"])
        }
    };
</script>