<template>
  <div class="about">
    <h1>About Us</h1>
      <History/>
      <Values/>
      <Business/>
      <Contact/>
  </div>
</template>

<style lang="scss" scoped>
  
</style>

<script>
    import History from "@/components/AboutUs/History.vue";
    import Values from "@/components/AboutUs/Values.vue";
    import Business from "@/components/AboutUs/Business.vue";
    import Contact from "@/components/AboutUs/Contact.vue";

export default {
  components: {
        History,
        Values,
        Business,
      Contact
  }
};
</script>
