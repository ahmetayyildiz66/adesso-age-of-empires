<template>
  <div class="units">
    <AgesFilter :units="getUnits"/>
    <CostsFilter />
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
      <tr v-for="(unit, index) in getUnits" :key="unit.id + index"
        class="units__item"
        @click="onDetail(unit.id)">
          <UnitItem :unit="unit"/>
      </tr>
    </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UnitItem from '../components/UnitItem.vue';
import AgesFilter from '../components/AgesFilter.vue';
import CostsFilter from '../components/CostsFilter.vue';

export default {
  name: 'Units',
  components: {
    UnitItem,
    AgesFilter,
    CostsFilter,
  },
  mounted() {
    this.setAge('All');
    this.setCost([]);
  },
  computed: {
    ...mapGetters('units', ['getUnits']),
  },
  methods: {
    ...mapActions('units', ['setAge', 'setCost']),
    onDetail(id) {
      this.$router.push({ name: 'UnitDetail', params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 80%;
  border-collapse: collapse;
  border: 3px solid $color-dark-blue;
  margin: 5rem 1rem 0 1rem;
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

.units {
  &__item {
    cursor: pointer;

    &:hover {
      background: $table-even-value-color;
    }
  }
}
</style>
