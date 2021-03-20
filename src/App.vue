<template>
  <div class="nav">
    <TheNavbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
