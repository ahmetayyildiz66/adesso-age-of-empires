<template>
  <table class="table">
    <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>age</th>
      <th>costs</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(unit, index) in getUnits" :key="unit.id + index">
      <UnitItem :unit="unit"/>
    </tr>
  </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import UnitItem from './UnitItem.vue';

export default {
  name: 'Units',
  components: {
    UnitItem,
  },
  computed: {
    ...mapGetters('units', ['getUnits']),
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 80%;
  border-collapse: collapse;
  border: 3px solid $color-dark-blue;
  margin: 1rem 1rem 0 1rem;
  & th {
    text-align: center;
    background-color: $color-dark-blue;
    color: $color-white;
    padding: .8rem;
    min-width: 3rem;
  }

  & td {
    text-align: center;
    padding: .8rem;
    border-right: 2px solid $table-row-color;

    &:last-child {
      border-right: none;
    }
  }
}
</style>
