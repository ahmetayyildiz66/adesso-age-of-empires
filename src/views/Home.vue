<template>
  <div class="home">
    <img src="../assets/home-image.png" class="home__image" />
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  &__image {
    @include absoluteCenter;
  }
}
</style>
