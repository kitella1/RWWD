<template>
    <div class="eventItem" v-if="countryMatch(event.categories)">
        <h3>{{ event.title.rendered.toString() }} </h3>
        <img class="image" :src="event._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" />
        <p class="date"><span class="bold">Date:</span> {{ event.acf.event_date }}</p>
        <p class="start"><span class="bold">Start time:</span> {{ event.acf.start_time }}</p>
        <p class="finish"><span class="bold">Finish time:</span> {{ event.acf.finish_time }}</p>
        <p class="description">{{ event.acf.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @media only screen and (min-width: 320px) {
    .bold {
        font-weight: 700;
    }
    .eventItem { 
        text-align: start;
        width: 70%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
    }
    .eventItem > * {
        width: 100%;
        margin: 0;
    }
    h3 {
        padding-top: 1em;
        padding-bottom: 0.5em;
    }
    .date, .start, .finish {
        align-self: flex-start;
        padding-top: 0.4em;
    }
    .image {
        width: 100%;
        height: auto;    
        //background: rgb(216, 216, 216);
    }
    .description {
        text-align: justify;
        margin-top: 0.5em;  
        font-size: 0.88em;
    }
}
</style>

<script>

    import store from "@/store/index";
    import { mapState, mapGetters } from "vuex";

    export default {
        name: 'eventItem',
        props: ["event"],
        methods: {
            setActiveCountry: function(countryCode) {
                this.$store.dispatch("countryChange", countryCode);
            },
            countryMatch: function(categories) {
                for(let i = 0; i < categories.length; i++) {
                    console.log(categories[i])
                    console.log(this.$store.state.activeCountry)
                    if(categories[i] === 16 && this.$store.state.activeCountry === "UK")                    
                    {
                        return true
                    }
                    else if(categories[i] === 17 && this.$store.state.activeCountry ==="US"){
                        return true
                    }
                }
                return false;
            }
        },
  computed: {
    ...mapState(["activeCountry"]),
    ...mapGetters(["currentCountry"])
  }
    }
</script>