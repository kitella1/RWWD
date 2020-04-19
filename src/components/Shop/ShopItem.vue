<template>
    <div class="shopItem">
        <img id="image" :src="require(`@/assets/images/${image}.png`)" />
        <h3>{{ title }} </h3>
        <p>{{ description }}</p>
        <p v-if="currency === 'UK'">&#163;{{ price }}</p>
        <p v-else-if="currency === 'US'">&#36;{{ price }}</p>
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
        props: {
            image: String,
            title: String,
            description: String,
            price: String,
            currency: String
        }
    }
</script>