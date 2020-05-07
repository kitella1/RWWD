<template>
    <div id="fruitGame">
        <h1>Hangman</h1> 
        <hangman-game id="hangman"
        :words="words"
        />
    </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 500px) {
    #fruitGame {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>

<script>
import 'vue-games';

export default {
    data () {
        return {
            words: ["Oranges", "Strawberry", "Apple", "Banana"]
        }
    }
}
</script>