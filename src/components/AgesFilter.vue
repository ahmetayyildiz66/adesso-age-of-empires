<template>
  <div class="ages">
    <p class="ages__text">Ages</p>
    <div class="btn-group">
      <button class="btn-group__button"
        v-for="button in buttons"
        :key="button.name"
        :class="{'active': button.isSelected}"
        @click="onAgeButton(button.name)">
          {{ button.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Ages',
  props: {
    units: Array,
  },
  data() {
    return {
      buttons: [
        {
          name: 'All',
          isSelected: true,
        },
        {
          name: 'Dark',
          isSelected: false,
        },
        {
          name: 'Feudal',
          isSelected: false,
        },
        {
          name: 'Castle',
          isSelected: false,
        },
        {
          name: 'Imperial',
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions('units', ['setAge']),
    onAgeButton(name) {
      this.unSelectButtons();
      this.buttons = this.buttons.map((btn) => (btn.name === name
        ? { ...btn, isSelected: true } : btn));
      this.setAge(name);
    },
    unSelectButtons() {
      this.buttons.forEach((btn) => {
        btn.isSelected = false;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.ages {
  margin-left: 2rem;

  &__text {
    margin-bottom: 2rem;
    font-weight: 700;
  }
}

.btn-group {

  &__button {
    background-color: $color-white;
    border: 1px solid $color-black;
    color: $color-black;
    padding: 1rem 2.4rem;
    cursor: pointer;
    float: left;
    margin: 0;
    outline: none;

    &:not(:last-child) {
      border-right: none;
    }

    &:hover {
      background-color: $color-grey;
    }
  }

  &:after {
    content: "";
    clear: both;
    display: table;
  }
}

.active {
  background-color: $color-grey;
}

</style>
