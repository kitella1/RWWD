<template>
    <div id="merch">
        <ShopItem v-for="(item, index) in jsonRes" :key="index" :item="item" />
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
        .then(data => console.log(data))
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