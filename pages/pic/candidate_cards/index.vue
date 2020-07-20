<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">
                Candidate Cards
              </h6>
              <p class="text-white">
                All Created Candidate Cards by PIC TAs
              </p>
              <ul class="text-white">
                <li>
                  Click No Suggestion button to provide Talent Suggestion from
                  Talent Pool.
                </li>
                <li>
                  If the User accepts the suggestion. Click Not Assigned button
                  to assign Candidate Account to the Card. (Please firstly
                  create the account for the talent)
                </li>
              </ul>
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
                  <h5 class="h3 mb-0">Latest Candidate Cards</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="containter">
                <div v-if="CANDIDATE_CARDS.data" class="row">
                  <div
                    v-for="item in CANDIDATE_CARDS.data"
                    :key="item.id"
                    class="col-12 col-md-6 col-xl-4"
                  >
                    <div class="card">
                      <div class="card-header bg-default text-white">
                        <div class="row">
                          <div class="col">
                            <h6
                              class="text-uppercase text-white text-muted ls-1 mb-1"
                            >
                              {{
                                item.created_at
                                  | moment('dddd, MMMM Do YYYY | hh:mm:ss')
                              }}
                            </h6>
                            <h5 class="h3 mb-0 text-white">
                              {{ item.erf.title }}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="">
                          <table
                            class="table table-white table-flush table-hover"
                          >
                            <tbody>
                              <tr>
                                <td>ID</td>
                                <td>{{ item.id }}</td>
                              </tr>
                              <tr>
                                <td>Candidate Email</td>
                                <td v-if="item.candidate">
                                  {{ item.candidate.email }}
                                </td>
                                <td v-else-if="item.status.id !== 3">
                                  <span class="text-danger"
                                    >Cannot Assign Account</span
                                  >
                                </td>
                                <td v-else>
                                  <button
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#modal-assign"
                                    class="btn btn-sm btn-outline-danger"
                                    @click="
                                      GET_CANDIDATE_ACCOUNTS(),
                                        selectCard(item.id)
                                    "
                                  >
                                    Not Assigned
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>Talent Suggestion</td>
                                <td v-if="item.talent">
                                  {{ item.talent.name }}
                                </td>
                                <td v-else>
                                  <button
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#modal-suggest"
                                    class="btn btn-sm btn-outline-info"
                                    @click="GET_TALENTS(), selectCard(item.id)"
                                  >
                                    No Suggestion
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>Status</td>
                                <td>
                                  {{ item.status.id }} - {{ item.status.state }}
                                </td>
                              </tr>
                              <tr>
                                <td>ERF By</td>
                                <td>
                                  {{ item.erf.div_user.name }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="card-footer">
                        <button type="button" class="btn btn-block btn-primary">
                          <span class="btn-inner--text">Full Detail</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="row">
                  <div class="col-4">
                    <content-placeholders :rounded="true">
                      <content-placeholders-img />
                      <content-placeholders-heading />
                    </content-placeholders>
                  </div>
                  <div class="col-4">
                    <content-placeholders :rounded="true">
                      <content-placeholders-img />
                      <content-placeholders-heading />
                    </content-placeholders>
                  </div>
                  <div class="col-4">
                    <content-placeholders :rounded="true">
                      <content-placeholders-img />
                      <content-placeholders-heading />
                    </content-placeholders>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="CANDIDATE_CARDS.links" class="card-footer">
              <div ref="loadingContainer"></div>

              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a
                      v-if="CANDIDATE_CARDS.links.prev"
                      class="page-link"
                      href="javascript:"
                      @click="
                        changePage(prev)
                        getCandidateCards(page)
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
                      v-if="CANDIDATE_CARDS.links.next"
                      class="page-link"
                      href="javascript:"
                      @click="
                        changePage(next)
                        getCandidateCards(page)
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
    <!-- Modal -->
    <modal-assign :selected-card="selectedCard" />
    <modal-suggest :selected-card="selectedCard" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ModalSuggest from '@/components/pic/candidate_cards/ModalSuggest'
import ModalAssign from '@/components/pic/candidate_cards/ModalAssign'
export default {
  middleware: ['auth', 'pic'],
  name: 'PICCandidateCards',
  components: {
    ModalSuggest,
    ModalAssign
  },
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next',
      selectedCard: 0
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS'
    })
  },
  created() {
    this.getCandidateCards(this.page)
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',
      GET_CANDIDATE_ACCOUNTS: 'candidate-accounts/GET_CANDIDATE_ACCOUNTS',
      GET_TALENTS: 'talents/GET_TALENTS'
    }),
    selectCard(id) {
      this.selectedCard = id
    },
    async getCandidateCards(page) {
      this.loading = true
      const loader = this.$loading.show({
        container: this.$refs.loadingContainer
      })
      try {
        await this.GET_CANDIDATE_CARDS(page)
      } catch (e) {
        this.page--
        alert(e.response.data)
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

<style scoped>
.table td {
  white-space: normal !important;
}
</style>
