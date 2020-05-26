<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Dashboard PIC</h6>
            </div>
          </div>
          <!-- Card stats -->
          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        ERFS Submitted
                      </h5>
                      <span class="h2 font-weight-bold mb-0">{{
                        ERFS.count
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-gradient-red text-white rounded-circle shadow"
                      >
                        <i class="ni ni-bullet-list-67"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Talent Pool
                      </h5>
                      <span class="h2 font-weight-bold mb-0"
                        >{{ TALENTS.count }}
                      </span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-gradient-orange text-white rounded-circle shadow"
                      >
                        <i class="ni ni-single-02"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Assigned Cards
                      </h5>
                      <span class="h2 font-weight-bold mb-0">{{
                        CARDS.count
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-gradient-green text-white rounded-circle shadow"
                      >
                        <i class="ni ni-single-copy-04"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Performance
                      </h5>
                      <span class="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-gradient-info text-white rounded-circle shadow"
                      >
                        <i class="ni ni-chart-bar-32"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <!-- LATEST SUBMIT -->
        <div class="col-xl-8">
          <div class="card bg-white shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">
                    ERF
                  </h6>
                  <h5 class="h3 mb-0">Latest Submits</h5>
                </div>
              </div>
            </div>
            <div class="table-responsive mb-5">
              <table
                class="table align-items-center table-white table-flush table-hover"
              >
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort">
                      Title
                    </th>
                    <th scope="col" class="sort">
                      Created At
                    </th>
                    <th scope="col" class="sort">
                      Status
                    </th>
                    <th scope="col" class="sort">
                      Submitted By
                    </th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in ERFS.results" :key="item.id">
                    <td>
                      {{ item.title }}
                    </td>
                    <td class="budget">
                      {{
                        item.created_at
                          | moment('dddd, MMMM Do YYYY | hh:mm:ss')
                      }}
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-warning"></i>
                        <span class="status">pending</span>
                      </span>
                    </td>
                    <td>
                      {{ item.div_user }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- LATEST TALENT -->
        <div class="col-xl-4">
          <div class="card bg-white shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">
                    Talent Pool
                  </h6>
                  <h5 class="h3 mb-0">Latest New Talents</h5>
                </div>
              </div>
            </div>
            <div class="table-responsive mb-5">
              <table
                class="table align-items-center table-white table-flush table-hover"
              >
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort">
                      Name
                    </th>
                    <th scope="col" class="sort">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in TALENTS.results" :key="item.id">
                    <td>
                      {{ item.name }}
                    </td>
                    <td class="budget">
                      {{ item.source }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Footer from '@/components/core/Footer.vue'

export default {
  middleware: ['auth', 'pic'],
  name: 'PICDashboard',
  components: {
    Footer
  },

  computed: {
    ...mapGetters({
      ERFS: 'pic/ERFS',
      TALENTS: 'pic/TALENTS',
      CARDS: 'pic/CARDS'
    })
  },
  created() {
    this.getERFS()
    this.getTALENTS()
    this.getCARDS()
  },
  methods: {
    ...mapActions({
      getERFS: 'pic/GET_ERFS',
      getTALENTS: 'pic/GET_TALENTS',
      getCARDS: 'pic/GET_CARDS'
    })
  }
}
</script>
