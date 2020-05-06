<template>
    <div id="fruitGame">
        <h1>Memory Game</h1> 
        <div id="deck">
            <span id="score">
                <p>Time: {{ this.time }}</p>
                <p>Turns: {{ this.turns }}</p>
                <p>Score: {{ this.score }}</p>
            </span>

            <span class="card" v-for="card in cards" :key="card.id" @click="showCard(this)">
                <img key=1 class="icon" v-bind:src="card.url" width="500" height="500" alt="an icon of an apple" />
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes flipInY {
	from {
		transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
		animation-timing-function: ease-in;
		opacity: 0;
	}

	40% {
		transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
		animation-timing-function: ease-in;
	}

	60% {
		transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
		opacity: 1;
	}

	80% {
		transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
	}

	to {
		transform: perspective(400px);
	}
}

    #fruitGame {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    #deck {
        display: grid;
        width: 90vw;
        height: 130vw;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 10% 22% 22% 22% 22%;
        justify-items: center;
        align-items: center;
        background: lightgray;
        border: black solid 2px;
        border-radius: 3px;
    }

    #score {
        grid-column-start: 1;
        grid-column-end: span 4;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        color: $font;
    }

    .card .open {
        transform: rotateY(0);
        cursor: default;
        animation-name: flipInY;
        animation-duration: .75s;
    }

    .card {
        box-sizing: border-box;
        width: 90%;
        height: 90%;
        background: lightcoral;
        border: white solid 4px;
        border-radius: 5px;
    }

    .card * {
        width: 100%;
        height: auto;
    }
</style>

<script>
export default {
    data () {
        return {
            showSplash: false,
            started: false,
            startTime: 0,
            turns: 0,
            timer: null,
            time: "--:--",
            score: 0,
            openCard: "",
            cardTypes: [
                {name: "greenApple", url: require('@/assets/images/appleIcon.png')},
                {name: "banana", url: require('@/assets/images/bananaIcon.png')},
                {name: "strawberry", url: require('@/assets/images/strawbIcon.png')},
                {name: "blackberry", url: require('@/assets/images/blackIcon.png')},
                {name: "broccoli", url: require('@/assets/images/broccoIcon.png')},
                {name: "cucumber", url: require('@/assets/images/cucumberIcon.png')},
                {name: "pineapple", url: require('@/assets/images/pineIcon.png')},
                {name: "redApple", url: require('@/assets/images/appleIcon2.png')}
            ],
            cards: []
        }
    },
    methods: {
        restartGame: function() {
            console.log("Restarted")
            let id = 0;
            this.cards = [];
            for(let j = 0; j < 2; j++)
            {
                for (let i = 0; i < this.cardTypes.length; i++) {
                    let card = {
                        id: id,
                        name: this.cardTypes[i].name,
                        url: this.cardTypes[i].url
                    }
                    this.cards.push(card);
                    id++;
                }
            }
            this.shuffleDeck()
        },
        shuffleDeck() {   
            let tempCards = this.cards;  
            for (let i = tempCards.length - 1; i > 0; i--) {
                let random = Math.floor(Math.random() * (i + 1));
                //temporarily hold card
                let newCard = tempCards[i];
                //overwrite card with random card
                tempCards[i] = tempCards[random];
                //replace random card with old card
                tempCards[random] = newCard;
            }
            this.cards = tempCards;
        },
        showCard: function(card) {
            
        },
        findCardIndex: function(cardId) {
            for(let i = 0; i < this.cards.length; i++){
                if(this.cards[i].id === cardId) {
                    return i
                }
            }
        }
    },
    created() {
        this.restartGame();
    }
}
</script>
