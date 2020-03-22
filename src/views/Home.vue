<template>
  <div class="home">
    <img id="logo" alt="Mcintire Fruits logo" src="@/assets/images/logo.png">
    <Landing msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style scoped lang="scss">
#logo
{
  width: 20vw;
  height: auto;
}
</style>

<script>
import Landing from '@/components/Landing.vue'

export default {
  name: 'Home',
  components: {
    Landing
  }
}
</script>
