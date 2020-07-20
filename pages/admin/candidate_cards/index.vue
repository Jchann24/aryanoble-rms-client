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
                  reserved instruction
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
                                <td>PIC</td>
                                <td>{{ item.pic.name }}</td>
                              </tr>
                              <tr>
                                <td>Candidate Email</td>
                                <td v-if="item.candidate">
                                  {{ item.candidate.email }}
                                </td>
                                <td v-else>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline-danger"
                                    disabled
                                  >
                                    Not Assigned
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
                                <td>Interview Detail</td>
                                <td v-if="item.interview_detail">
                                  {{ item.interview_detail.location }} /
                                  {{ item.interview_detail.date_time }}
                                </td>
                                <td v-else>
                                  <span class="text-danger">No Detail</span>
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
                        <button
                          v-if="item.candidate"
                          type="button"
                          class="btn btn-block btn-info"
                          data-toggle="modal"
                          data-target="#modal-notification"
                          @click="selectCard(item)"
                        >
                          Actions
                        </button>
                        <button
                          v-else
                          type="button"
                          class="btn btn-block btn-outline-info"
                          disabled
                        >
                          Actions
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
                      v-if="CANDIDATE_CARDS.links.prev && !loading"
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
                      v-if="CANDIDATE_CARDS.links.next && !loading"
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
    <modal-actions :selected-card="selectedCard" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ModalActions from '@/components/admin/candidate_cards/ModalActions'

export default {
  middleware: ['auth', 'admin'],
  name: 'AdminCandidateCards',
  components: {
    ModalActions
  },
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next',
      selectedCard: {},
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS',
      INTERVIEW_DETAIL: 'interview-detail/INTERVIEW_DETAIL',
      CANDIDATE_CARD: 'candidate-cards/CANDIDATE_CARD'
    })
  },
  created() {
    this.getCandidateCards(this.page)
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD'
    }),

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
    },

    selectCard(object) {
      const card = object
      this.selectedCard = JSON.parse(JSON.stringify(card))
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style></style>
