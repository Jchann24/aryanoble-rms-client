<template>
  <nav
    id="sidenav-main"
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
  >
    <div class="scrollbar-inner bg-transparent">
      <!-- Brand -->
      <div class="sidenav-header align-items-center">
        <a class="navbar-brand" href>
          <img src="/img/logo.png" class="navbar-brand-img" alt="..." />
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div id="sidenav-collapse-main" class="collapse navbar-collapse">
          <!-- Nav items -->
          <ul class="navbar-nav mt-4">
            <div v-if="group === 1">
              <li class="nav-item">
                <a class="nav-link" href="examples/dashboard.html">
                  <i class="ni ni-tv-2 text-default"></i>
                  <span class="nav-link-text">Dashboard Admin TA</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/icons.html">
                  <i class="ni ni-collection text-default"></i>
                  <span class="nav-link-text">ERF</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/profile.html">
                  <i class="ni ni-folder-17 text-default"></i>
                  <span class="nav-link-text">Talent Pool</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/tables.html">
                  <i class="ni ni-single-02 text-default"></i>
                  <span class="nav-link-text">Candidates Account</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/login.html">
                  <i class="ni ni-badge text-default"></i>
                  <span class="nav-link-text">Candidates Card</span>
                </a>
              </li>
            </div>
            <div v-if="group === 2">
              <li class="nav-item">
                <nuxt-link
                  to="/pic"
                  tag="a"
                  class="nav-link"
                  exact-active-class="active"
                >
                  <i class="ni ni-tv-2 text-default"></i>
                  <span class="nav-link-text">Dashboard PIC TA</span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/pic/erf"
                  tag="a"
                  class="nav-link"
                  exact-active-class="active"
                >
                  <i class="ni ni-collection text-default"></i>
                  <span class="nav-link-text">ERF</span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/pic/pool"
                  tag="a"
                  class="nav-link"
                  exact-active-class="active"
                >
                  <i class="ni ni-folder-17 text-default"></i>
                  <span class="nav-link-text">Talent Pool</span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/pic/account"
                  tag="a"
                  class="nav-link"
                  exact-active-class="active"
                >
                  <i class="ni ni-single-02 text-default"></i>
                  <span class="nav-link-text">Candidate Account</span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/pic/candidate_cards"
                  tag="a"
                  class="nav-link"
                  exact-active-class="active"
                >
                  <i class="ni ni-badge text-default"></i>
                  <span class="nav-link-text">Candidate Cards</span>
                </nuxt-link>
              </li>
            </div>
            <div v-if="group === 3">
              <li class="nav-item">
                <a class="nav-link" href="examples/dashboard.html">
                  <i class="ni ni-tv-2 text-default"></i>
                  <span class="nav-link-text">Dashboard Division User</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/icons.html">
                  <i class="ni ni-collection text-default"></i>
                  <span class="nav-link-text">ERF</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/profile.html">
                  <i class="ni ni-folder-17 text-default"></i>
                  <span class="nav-link-text">Talent Pool</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/tables.html">
                  <i class="ni ni-single-02 text-default"></i>
                  <span class="nav-link-text">Candidates Account</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="examples/login.html">
                  <i class="ni ni-badge text-default"></i>
                  <span class="nav-link-text">Candidates Card</span>
                </a>
              </li>
            </div>
          </ul>
          <hr class="my-3" />
          <!-- Heading -->
          <h6 class="navbar-heading p-0 text-muted">
            <span class="docs-normal">API Info</span>
          </h6>
          <!-- Navigation -->
          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html"
                target="_blank"
              >
                <i class="ni ni-archive-2"></i>
                <span class="nav-link-text">DRF</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html"
                target="_blank"
              >
                <i class="ni ni-books"></i>
                <span class="nav-link-text">Swagger</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
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
