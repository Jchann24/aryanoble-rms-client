<template>
  <div>
    <client-only>
      <side-bar />
    </client-only>
    <div id="panel" class="main-content">
      <top-nav />
      <nuxt />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/core/SideBar.vue'
import TopNav from '@/components/core/TopNav.vue'

export default {
  name: 'DefaultLayout',
  components: {
    SideBar,
    TopNav
  }
}
</script>
