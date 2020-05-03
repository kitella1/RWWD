<template>
    <div class="eventItem">
        <h3>{{ event.title.rendered.toString() }} </h3>
        <img id="image" :src="event._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" />
        <p>Date: {{ event.acf.event_date }}</p>
        <p>Start time: {{ event.acf.start_time }}</p>
        <p>Finish time: {{ event.acf.finish_time }}</p>
        <p>{{ event.acf.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
    #image {
        width: 50%;
    }
</style>

<script>
    export default {
        name: 'eventItem',
        props: ["event"]
    }
</script>