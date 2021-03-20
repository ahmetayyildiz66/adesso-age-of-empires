<template>
  <nav class="navbar">
    <h1 class="heading">
          {{ $route.name }} Page
    </h1>
    <div class="navbar__routes">
      <router-link to="/" tag="a">Home</router-link>
      <router-link to="/units" tag="a">Units</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: $navbar-size-link;
  &__routes {
    width: 20rem;
  }
}
.heading {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

a {
  margin-right: 2rem;
  &:visited {
    color: $color-dodger-blue;
  }
}
</style>
