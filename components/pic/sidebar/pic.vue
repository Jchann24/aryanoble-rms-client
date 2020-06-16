<template>
  <div>
    <li class="nav-item">
      <nuxt-link to="/pic" tag="a" class="nav-link" exact-active-class="active">
        <i class="ni ni-tv-2 text-default"></i>
        <span class="nav-link-text">Dashboard PIC TA</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/pic/erf" tag="a" class="nav-link" active-class="active">
        <i class="ni ni-collection text-default"></i>
        <span class="nav-link-text">ERF</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/pic/pool" tag="a" class="nav-link" active-class="active">
        <i class="ni ni-folder-17 text-default"></i>
        <span class="nav-link-text">Talent Pool</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link
        to="/pic/candidate_accounts"
        tag="a"
        class="nav-link"
        active-class="active"
      >
        <i class="ni ni-single-02 text-default"></i>
        <span class="nav-link-text">Candidate Accounts</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link
        to="/pic/candidate_cards"
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
  middleware: ['pic'],
  name: 'PICSidebar'
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
