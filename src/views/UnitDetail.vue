<template>
  <table class="table">
    <tr>
      <th></th>
    </tr>
    <tr>
      <td>ID: {{ unitDetail.id }}</td>
    </tr>
    <tr>
      <td>Name: {{ unitDetail.name }}</td>
    </tr>
    <tr>
      <td>Description: {{ unitDetail.description }}</td>
    </tr>
    <tr>
      <td>Min. Required Age: {{ unitDetail.age }}</td>
    </tr>
    <tr>
      <td>Wood Cost: {{ unitDetail.cost['Wood'] ? unitDetail.cost['Wood']: '-----' }}</td>
    </tr>
    <tr>
      <td>Food Cost: {{ unitDetail.cost['Food'] ? unitDetail.cost['Food']: '-----' }}</td>
    </tr>
    <tr>
      <td>Gold Cost: {{ unitDetail.cost['Gold'] ? unitDetail.cost['Gold']: '-----' }}</td>
    </tr>
    <tr>
      <td>Build Time: {{ unitDetail.build_time }}</td>
    </tr>
    <tr>
      <td>Reload Time: {{ unitDetail.reload_time }}</td>
    </tr>
    <tr>
      <td>Hit Points: {{ unitDetail.hit_points }} </td>
    </tr>
    <tr>
      <td>Attack: {{ unitDetail.attack }}</td>
    </tr>
  </table>
  <p>{{ unitDetail }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UnitDetail',
  props: {
    id: String,
  },
  computed: {
    ...mapGetters('units', ['getUnits']),
    unitDetail() {
      const id = this.$route.params.id * 1;
      return this.getUnits.find((unit) => unit.id === id);
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  border: 1px solid black;
}

table {
  width: 25%;
}
</style>
