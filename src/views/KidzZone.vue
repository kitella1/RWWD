<template>
    <div class="kids">
        <h1>This is a kids page</h1>
        <Facts />
        <Game />
    </div>
</template>

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