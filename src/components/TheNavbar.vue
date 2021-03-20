<template>
  <nav class="navbar">
    <h1 class="heading">
          {{ $route.name }} Page
    </h1>
    <div class="navbar__routes">
      <router-link to="/">Home</router-link>
      <router-link to="/units">Units</router-link>
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
}
.heading {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
