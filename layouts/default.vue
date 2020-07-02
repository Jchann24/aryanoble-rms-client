<template>
  <div>
    <client-only>
      <side-bar v-if="isAuthenticated" />
    </client-only>
    <div id="panel" class="main-content">
      <top-nav v-if="isAuthenticated" />
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideBar from '@/components/core/SideBar.vue'
import TopNav from '@/components/core/TopNav.vue'

export default {
  name: 'DefaultLayout',
  components: {
    SideBar,
    TopNav
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style lang="css"></style>
