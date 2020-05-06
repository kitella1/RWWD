<template>
    <div id="kids">
        <img id="splash" src="@/assets/images/fruitsplash.png"/>
        <h1>Kidz Zone</h1>
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
        <Facts id="facts" />
        <Game id="fruitGame" />
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
    
* {
    font-family: 'Patrick Hand', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}

@media only screen and (min-width: 200px) {
    h1 {
        margin-top: 0;
        font-size: 3em;
    }

#kids {
    background: #454E9E;
}

#splash {
    width: 100%;
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
</style>

<script>
    import Facts from "@/components/KidzZone/Facts.vue";
    import Game from "@/components/KidzZone/Game.vue";

    export default {
        components: {
            Facts,
            Game
        }
    };
</script>