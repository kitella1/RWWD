<template>
  <div id="home">
      <Hero/>
      <About/>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import Hero from "@/components/Home/Hero.vue"
  import About from "@/components/Home/About.vue";

export default {
  components: {
    About,
    Hero
  }
};
</script>


