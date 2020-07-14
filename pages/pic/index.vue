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
                    <div v-if="ERFS.meta" class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Submitted
                      </h5>
                      <span class="h2 font-weight-bold mb-0"
                        >{{ ERFS.meta.total }} ERFs</span
                      >
                    </div>
                    <div v-else class="col">
                      <content-placeholders :rounded="true">
                        <content-placeholders-heading />
                      </content-placeholders>
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
                    <div v-if="TALENTS.meta" class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Pool
                      </h5>
                      <span class="h2 font-weight-bold mb-0"
                        >{{ TALENTS.meta.total }} Talents
                      </span>
                    </div>
                    <div v-else class="col">
                      <content-placeholders :rounded="true">
                        <content-placeholders-heading />
                      </content-placeholders>
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
                    <div v-if="CARDS.meta" class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Cards
                      </h5>
                      <span class="h2 font-weight-bold mb-0"
                        >{{ CARDS.meta.total }} Candidates</span
                      >
                    </div>
                    <div v-else class="col">
                      <content-placeholders :rounded="true">
                        <content-placeholders-heading />
                      </content-placeholders>
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
                        Group
                      </h5>
                      <span class="h2 font-weight-bold mb-0">PIC TA</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-gradient-info text-white rounded-circle shadow"
                      >
                        <i class="ni ni-building"></i>
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
            <div v-if="ERFS.data" class="table-responsive mb-5">
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
                      Submitted By
                    </th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in ERFS.data" :key="item.id">
                    <td>
                      {{ item.title }}
                    </td>
                    <td>
                      {{
                        item.created_at
                          | moment('dddd, MMMM Do YYYY | hh:mm:ss')
                      }}
                    </td>
                    <td>
                      {{ item.div_user.name }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="col my-4 mx-auto py-2 px-5">
              <content-placeholders :rounded="true">
                <content-placeholders-heading />
                <content-placeholders-text :lines="5" />
              </content-placeholders>
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
            <div v-if="TALENTS.data" class="table-responsive mb-5">
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
                  <tr v-for="item in TALENTS.data" :key="item.id">
                    <td>
                      {{ item.name }}
                    </td>
                    <td>
                      {{ item.source }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="col my-4 mx-auto py-2 px-5">
              <content-placeholders :rounded="true">
                <content-placeholders-heading />
                <content-placeholders-text :lines="5" />
              </content-placeholders>
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
      ERFS: 'erfs/ERFS',
      TALENTS: 'talents/TALENTS',
      CARDS: 'candidate-cards/CANDIDATE_CARDS'
    })
  },
  created() {
    this.getERFS()
    this.getTALENTS()
    this.getCARDS()
  },
  methods: {
    ...mapActions({
      getERFS: 'erfs/GET_ERFS',
      getTALENTS: 'talents/GET_TALENTS',
      getCARDS: 'candidate-cards/GET_CANDIDATE_CARDS'
    })
  }
}
</script>
