<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">
                Candidate Accounts
              </h6>
              <p class="text-white">
                These are created accounts for candidates, who can use this
                platform.
              </p>
            </div>
          </div>
          <!-- Card stats -->
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--5">
      <div class="row">
        <!-- LATEST SUBMIT -->
        <div class="col-xl-12">
          <div class="card bg-white shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">
                    All
                  </h6>
                  <h5 class="h3 mb-0">Latest Candidate Accounts</h5>
                </div>
              </div>
            </div>
            <div v-if="CANDIDATE_ACCOUNTS.data" class="table-responsive mb-5">
              <table
                class="table align-items-center table-white table-flush table-hover"
              >
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort">
                      Name
                    </th>
                    <th scope="col" class="sort">
                      E-mail
                    </th>
                    <th scope="col" class="sort">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in CANDIDATE_ACCOUNTS.data" :key="item.id">
                    <td>
                      {{ item.name }}
                    </td>
                    <td>
                      {{ item.email }}
                    </td>
                    <td class="budget">
                      {{
                        item.created_at
                          | moment('dddd, MMMM Do YYYY | hh:mm:ss')
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="col my-4 mx-4">
              <content-placeholders :rounded="true">
                <content-placeholders-heading />
                <content-placeholders-text :lines="5" />
              </content-placeholders>
            </div>
            <div v-if="CANDIDATE_ACCOUNTS.links" class="card-footer">
              <div ref="loadingContainer"></div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a
                      v-if="CANDIDATE_ACCOUNTS.links.prev && !loading"
                      class="page-link"
                      href="javascript:"
                      @click="
                        changePage(prev)
                        getCandidateAccounts(page)
                      "
                    >
                      <i class="fa fa-angle-left"></i>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link">{{ page }}</a>
                  </li>
                  <li class="page-item">
                    <a
                      v-if="CANDIDATE_ACCOUNTS.links.next && !loading"
                      class="page-link"
                      href="javascript:"
                      @click="
                        changePage(next)
                        getCandidateAccounts(page)
                      "
                    >
                      <i class="fa fa-angle-right"></i>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['auth', 'pic'],
  name: 'PICCandidateAccounts',
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next',
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_ACCOUNTS: 'candidate-accounts/CANDIDATE_ACCOUNTS'
    })
  },
  created() {
    this.getCandidateAccounts(this.page)
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_ACCOUNTS: 'candidate-accounts/GET_CANDIDATE_ACCOUNTS'
    }),
    async getCandidateAccounts(page) {
      this.loading = true
      const loader = this.$loading.show({
        container: this.$refs.loadingContainer
      })
      try {
        await this.GET_CANDIDATE_ACCOUNTS(page)
      } catch (e) {
        this.page--
      } finally {
        this.loading = false
        loader.hide()
      }
    },
    changePage(change) {
      change === 'next' ? this.page++ : this.page--
    }
  }
}
</script>

<style></style>
