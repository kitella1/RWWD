<template>
    <div id="shopData">
        <ShopItem v-for="(item, index) in jsonRes" :key="index" :item="item" />
    </div>
</template>

<style>
@media only screen and (min-width: 320px) {
    #shopData {
      display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>

<script>
    import ShopItem from "@/components/Shop/ShopItem";

export default {
    name: "GetData",
    props: ["url"],
  components: {
            ShopItem
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