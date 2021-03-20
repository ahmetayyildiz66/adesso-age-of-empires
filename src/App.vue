<template>
  <div class="nav">
    <TheNavbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import TheNavbar from '@/components/TheNavbar.vue';
import ageOfEmpires from './age-of-empires-units.json';

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
  mounted() {
    this.initializeUnits(ageOfEmpires.units);
  },
  methods: {
    ...mapActions('units', ['initializeUnits']),
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
