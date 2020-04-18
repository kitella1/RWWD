<template>
    <div class="shopItem">
        <img :src="'@/assets/images/' + image + '.png'"/>
        <h3>{{ title }} </h3>
        <p>{{ description }}</p>
        <p>£{{ price }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            image: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    }
</script>