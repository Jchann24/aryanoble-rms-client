<template>
  <nav
    id="sidenav-main"
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
  >
    <div class="scrollbar-inner bg-transparent">
      <!-- Brand -->
      <div class="sidenav-header align-items-center">
        <a id="navbar-home" class="navbar-brand" href>
          <img
            src="/img/logo.png"
            class="navbar-brand-img"
            alt="AryaNobleLogo"
          />
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div id="sidenav-collapse-main" class="collapse navbar-collapse">
          <!-- Nav items -->
          <ul class="navbar-nav mt-4">
            <div v-if="group === 1">
              <sidebar-admin />
            </div>
            <div v-else-if="group === 2">
              <sidebar-pic />
            </div>
            <div v-else-if="group === 3">
              <sidebar-user />
            </div>
          </ul>
          <hr class="my-3" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

import sidebarPic from '@/components/pic/sidebar/pic.vue'
import sidebarUser from '@/components/div_user/sidebar/user.vue'
import sidebarAdmin from '@/components/admin/sidebar/admin.vue'

export default {
  name: 'SideBar',
  components: {
    sidebarPic,
    sidebarUser,
    sidebarAdmin
  },
  computed: {
    ...mapGetters(['loggedInUser']),
    group() {
      return this.loggedInUser.groups[0]
    }
  }
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
