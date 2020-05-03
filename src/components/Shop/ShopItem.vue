<template>
    <div class="shopItem">
        <!-- <img id="image" :src="require(`@/assets/images/${image}.png`)" /> -->
        <h3>{{ item.title.rendered }} </h3>
        <!-- <p>{{ shopItem.content.rendered }}</p>
        <p v-if="currency === 'UK'">&#163;{{ price }}</p>
        <p v-else-if="currency === 'US'">&#36;{{ price }}</p> -->
    </div>
</template>

<style lang="scss" scoped>
    #image {
        width: 50%;
    }
</style>

<script>
    export default {
        name: 'shopItem',
        props: ["item"]
    }
</script>