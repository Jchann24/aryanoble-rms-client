<template>
  <nav
    class="navbar navbar-top navbar-expand navbar-dark bg-default border-bottom"
  >
    <div class="container-fluid">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center ml-md-auto">
          <li class="nav-item d-xl-none">
            <!-- Sidenav toggler -->
            <div
              class="pr-3 sidenav-toggler sidenav-toggler-dark"
              data-action="sidenav-pin"
              data-target="#sidenav-main"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </div>
          </li>
          <li class="nav-item d-sm-none">
            <a
              class="nav-link"
              href="#"
              data-action="search-show"
              data-target="#navbar-search-main"
            >
              <i class="ni ni-zoom-split-in"></i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ni ni-bell-55"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
            >
              <!-- Dropdown header -->
              <div class="px-3 py-3">
                <h6 class="text-sm text-muted m-0">
                  <strong class="text-primary">NOTICES</strong>.
                </h6>
              </div>
              <!-- List group -->
              <div class="list-group list-group-flush">
                <nuxt-link v-if="NOT_ASSIGNED !== 0" to="/pic/candidate_cards">
                  <a class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <img
                          alt="Image placeholder"
                          src="/img/top-nav/candidate-cards-notification.png"
                          class="avatar rounded-circle"
                        />
                      </div>
                      <div class="col ml--2">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <h5 class="mb-0 text-sm">
                              You have
                              <strong class="text-primary">{{
                                NOT_ASSIGNED
                              }}</strong>
                              Candidate Cards not assigned.
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav align-items-center ml-auto ml-md-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="media align-items-center">
                <span class="avatar rounded-circle">
                  <img alt="Image placeholder" :src="avatar" />
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span
                    v-if="loggedInUser"
                    class="mb-0 text-sm font-weight-bold"
                    >{{ loggedInUser.name }}</span
                  >
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Arya Noble</h6>
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" @click="logout">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TopNav',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      loggedInUser: 'loggedInUser',
      NOT_ASSIGNED: 'navbar/NOT_ASSIGNED'
    }),
    avatar() {
      const defaultAvatar = '/img/top-nav/candidate-avatar.png'
      const picAvatar = '/img/top-nav/admin-avatar.png'
      const adminAvatar = '/img/top-nav/pic-avatar.png'
      const userAvatar = '/img/top-nav/div-user-avatar.png'

      if (this.loggedInUser.group_id === 3) {
        return picAvatar
      } else if (this.loggedInUser.group_id === 2) {
        return adminAvatar
      } else if (this.loggedInUser.group_id === 4) {
        return userAvatar
      } else {
        return defaultAvatar
      }
    }
  },
  created() {
    if (this.loggedInUser.group_id === 0) {
      this.GET_NOT_ASSIGNED()
    }
  },

  methods: {
    ...mapActions({
      GET_NOT_ASSIGNED: 'navbar/GET_NOT_ASSIGNED'
    }),
    async logout() {
      await this.$auth.logout()
      window.location.reload(true)
    }
  }
}
</script>

<style></style>
