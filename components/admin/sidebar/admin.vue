<template>
  <div>
    <li class="nav-item">
      <nuxt-link
        to="/admin"
        tag="a"
        class="nav-link"
        exact-active-class="active"
      >
        <i class="ni ni-tv-2 text-default"></i>
        <span class="nav-link-text">Dashboard Admin TA</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/admin/erf" tag="a" class="nav-link" active-class="active">
        <i class="ni ni-collection text-default"></i>
        <span class="nav-link-text">ERF</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link
        to="/admin/pool"
        tag="a"
        class="nav-link"
        active-class="active"
      >
        <i class="ni ni-folder-17 text-default"></i>
        <span class="nav-link-text">Talent Pool</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link
        to="/admin/candidate_cards"
        tag="a"
        class="nav-link"
        active-class="active"
      >
        <i class="ni ni-badge text-default"></i>
        <span class="nav-link-text">Candidate Cards</span>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  middleware: ['admin'],
  name: 'AdminSidebar'
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
