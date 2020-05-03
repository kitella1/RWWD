<template>
    <div id="merch">
        <ShopItem v-for="(item, index) in jsonRes" :key="index" :item="item" />
        <!-- <ShopItem image="merch/mug" title="McIntire Fruits Mug" description="Perfect for any beverage." price='5' currency="UK" />-->
    </div>
</template>

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