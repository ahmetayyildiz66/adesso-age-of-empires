<template>
  <div class="slider">
    <p class="slider__text">Costs</p>
    <div class="slider__cost wood">
      <input type="checkbox" id="wood" name="wood" value="wood"
        v-model="checkedCosts" @change="onCheckbox($event)">
      <label for="wood" class="label wood__text">Wood</label>
        <Slider
        v-model="wood"
        :max="200"
        class="slider__range"
        @change="woodSliderChanged"
        />
        <p class="value">{{ isWoodChecked }}</p>
    </div>
    <div class="slider__cost food">
      <input type="checkbox" id="food" value="food"
        v-model="checkedCosts" @change="onCheckbox($event)">
      <label for="food" class="label wood__text">Food</label>
      <Slider
        v-model="food"
        :max="200"
        class="slider__range"
        @change="foodSliderChanged"
      />
      <p class="value">{{ isFoodChecked }}</p>
    </div>
    <div class="slider__cost gold">
      <input type="checkbox" id="gold" value="gold"
        v-model="checkedCosts" @change="onCheckbox($event)">
      <label for="gold" class="label wood__text">Gold</label>
      <Slider
        v-model="gold"
        :max="200"
        class="slider__range"
        @change="goldSliderChanged"
      />
      <p class="value">{{ isGoldChecked }}</p>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Slider from '@vueform/slider';

export default {
  name: 'CostsFilter',
  components: {
    Slider,
  },
  data() {
    return {
      wood: [0, 75],
      food: [0, 100],
      gold: [0, 125],
      checkedCosts: [],
      costs: [],
    };
  },
  computed: {
    isWoodChecked() {
      return !this.checkedCosts.includes('wood') ? '-----' : this.wood;
    },
    isFoodChecked() {
      return !this.checkedCosts.includes('food') ? '-----' : this.food;
    },
    isGoldChecked() {
      return !this.checkedCosts.includes('gold') ? '-----' : this.gold;
    },
  },
  methods: {
    ...mapActions('units', ['setCost']),
    onCheckbox(event) {
      const { value } = event.target;
      if (this.checkedCosts.includes(value)) {
        this.costs.push(
          {
            name: event.target.value[0].toUpperCase() + event.target.value.substring(1),
            value: this[value],
          },
        );
      } else {
        this.costs = this.costs.filter((cost) => cost.name.toLowerCase() !== value);
      }
      this.setCost(this.costs);
    },
    woodSliderChanged(value) {
      this.updateSliderValue('Wood', value);
    },
    foodSliderChanged(value) {
      this.updateSliderValue('Food', value);
    },
    goldSliderChanged(value) {
      this.updateSliderValue('Gold', value);
    },
    updateSliderValue(name, value) {
      if (this.checkedCosts.includes(name.toLowerCase())) {
        this.costs = this.costs.map((item) => ((item.name === name)
          ? { ...item, value: value } : item));
        this.setCost(this.costs);
      }
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss" scoped>
.slider {
  width: 60rem;
  margin: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;

  &__text {
    margin-bottom: 3rem;
    font-weight: 700;
  }

  &__range {
    width: 80%;
    margin-left: 5rem;
  }

  &__cost {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
}

.label {
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
}

.value {
  margin-left: 2rem;
  width: 10rem;
}
</style>
