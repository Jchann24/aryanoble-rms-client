<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">
                Dashboard Admin TA
              </h6>
            </div>
          </div>
          <!-- Card stats -->
          <div class="row">
            <div class="col-xl-4 col-md-4">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Accounts
                      </h5>
                      <span class="h2 font-weight-bold mb-0"
                        >{{ CANDIDATE_ACCOUNTS.count }} Candidates
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
            <div class="col-xl-4 col-md-4">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Assigned Cards
                      </h5>
                      <span class="h2 font-weight-bold mb-0"
                        >{{ CANDIDATE_CARDS.count }} Candidates</span
                      >
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
            <div class="col-xl-4 col-md-4">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Group
                      </h5>
                      <span class="h2 font-weight-bold mb-0">ADMIN TA</span>
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
        <div class="col-xl-8">
          <div class="card bg-white shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">
                    Candidate Cards
                  </h6>
                  <h5 class="h3 mb-0">Latest Cards</h5>
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
                      ERF Title
                    </th>
                    <th scope="col" class="sort">
                      PIC
                    </th>
                    <th scope="col" class="sort">
                      Candidate Name
                    </th>
                    <th scope="col" class="sort">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in CANDIDATE_CARDS.results" :key="item.id">
                    <td>
                      {{ item.erf.title }}
                    </td>
                    <td>
                      {{ item.pic }}
                    </td>
                    <td v-if="item.candidate">
                      {{ item.candidate.first_name }}
                    </td>
                    <td v-else>
                      <span class="text-danger">No Candidate Assigned</span>
                    </td>
                    <td>
                      {{
                        item.created_at
                          | moment('dddd, MMMM Do YYYY | hh:mm:ss')
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card bg-white shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">
                    Candidate Accounts
                  </h6>
                  <h5 class="h3 mb-0">Latest New Accounts</h5>
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
                      Username
                    </th>
                    <th scope="col" class="sort">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in CANDIDATE_ACCOUNTS.results" :key="item.id">
                    <td>
                      {{ item.username }}
                    </td>
                    <td>
                      {{ item.email }}
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
  middleware: ['auth', 'admin'],
  name: 'AdminDashboard',
  components: {
    Footer
  },

  computed: {
    ...mapGetters({
      ERFS: 'erfs/ERFS',
      TALENTS: 'talents/TALENTS',
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS',
      CANDIDATE_ACCOUNTS: 'candidate-accounts/CANDIDATE_ACCOUNTS'
    })
  },
  created() {
    this.getERFS()
    this.getTALENTS()

    this.getCANDIDATE_CARDS()
    this.getCANDIDATE_ACCOUNTS()
  },
  methods: {
    ...mapActions({
      getERFS: 'erfs/GET_ERFS',
      getTALENTS: 'talents/GET_TALENTS',
      getCANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',

      getCANDIDATE_ACCOUNTS: 'candidate-accounts/GET_CANDIDATE_ACCOUNTS'
    })
  }
}
</script>
