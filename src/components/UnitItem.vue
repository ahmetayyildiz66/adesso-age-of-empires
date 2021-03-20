<template>
  <td>
    {{ unit.id }}
  </td>
  <td>
    {{ unit.name }}
  </td>
  <td>
    {{ unit.age }}
  </td>
  <td>
    {{ unitCost }}
  </td>
</template>

<script>
export default {
  name: 'UnitItem',
  props: {
    unit: Object,
  },
  computed: {
    unitCost() {
      if (!this.unit.cost) {
        return '';
      }

      const keys = Object.keys(this.unit.cost);
      let result = '';
      keys.forEach((item) => {
        result += `${item}: ${this.unit.cost[item]}, `;
      });
      result = result.replace(/,\s*$/, '');
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  text-align: center;
  padding: .8rem;
  border-right: 2px solid $color-dark-blue;

  &:last-child {
    border-right: none;
  }

  &:nth-child(2n) {
    background: $table-even-value-color;
  }
}

</style>
