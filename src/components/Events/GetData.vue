<template>
    <div id="eventData">
        <EventItem v-for="(item, index) in jsonRes" :key="index" :event="item" />
    </div>
</template>

<style>
@media only screen and (min-width: 320px) {
    #eventData {
      display: flex;
        flex-direction: column;
        align-items: center;
    }
}


@media only screen and (min-width: 1000px) {
    #eventData {
        padding-left: 20vw;
        padding-right: 20vw;
    }
}
</style>

<script>
    import EventItem from "@/components/Events/EventItem";

export default {
    name: "GetData",
    props: ["url"],
  components: {
            EventItem
        },
  data() {
    return {
      jsonRes: []
    };
  },
  methods: {
    fetchData: function() {
        fetch(this.url)
        .then(stream => stream.json())
        .then(data => (this.jsonRes = data))
        .catch(error => console.log(error));
    }
  },
created() {
    // Fetch Data
    this.fetchData();
  },
  watch: {
    url() {
      this.fetchData();
    }
  },

};
</script>