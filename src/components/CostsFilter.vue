<template>
  <div class="slider">
    <p class="slider__text">Costs</p>
    <div class="slider__cost wood">
      <input type="checkbox" id="wood" name="wood" value="Wood" v-model="checkedCosts">
      <label for="wood" class="label wood__text">Wood</label>
        <Slider
        v-model="wood"
        :max="200"
        class="slider__range"
        />
        <p class="value">{{ isWoodChecked }}</p>
    </div>
    <div class="slider__cost food">
      <input type="checkbox" id="food" value="Food" v-model="checkedCosts">
      <label for="food" class="label wood__text">Food</label>
      <Slider
        v-model="food"
        :max="200"
        class="slider__range"
      />
      <p class="value">{{ isFoodChecked }}</p>
    </div>
    <div class="slider__cost gold">
      <input type="checkbox" id="gold" value="Gold" v-model="checkedCosts">
      <label for="gold" class="label wood__text">Gold</label>
      <Slider
        v-model="gold"
        :max="200"
        class="slider__range"
      />
      <p class="value">{{ isGoldChecked }}</p>
    </div>
    </div>
</template>

<script>
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
    };
  },
  computed: {
    isWoodChecked() {
      return !this.checkedCosts.includes('Wood') ? '-----' : this.wood;
    },
    isFoodChecked() {
      return !this.checkedCosts.includes('Food') ? '-----' : this.food;
    },
    isGoldChecked() {
      return !this.checkedCosts.includes('Gold') ? '-----' : this.gold;
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
