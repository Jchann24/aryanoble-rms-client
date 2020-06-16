<template>
  <div>
    <li class="nav-item">
      <nuxt-link to="/div" tag="a" class="nav-link" exact-active-class="active">
        <i class="ni ni-tv-2 text-default"></i>
        <span class="nav-link-text">Dashboard User</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/div/erf" tag="a" class="nav-link" active-class="active">
        <i class="ni ni-collection text-default"></i>
        <span class="nav-link-text">ERF</span>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  middleware: ['div'],
  name: 'UserSidebar'
}
</script>

<style lang="css" scoped>
.active {
  background-color: rgb(214, 214, 214);
}
.nav-item {
  transition: transform 0.6s ease;
}
.nav-item:hover {
  transform: scale(1.04);
}
</style>
