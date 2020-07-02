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
                      Candidate Username
                    </th>
                    <th scope="col" class="sort">
                      Talent Suggestion
                    </th>
                    <th scope="col" class="sort">
                      Status
                    </th>
                    <th scope="col" class="sort">
                      PIC
                    </th>

                    <th></th>
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
                    <td v-if="item.candidate">
                      {{ item.candidate.username }}
                    </td>
                    <td v-else>
                      <span class="text-uppercase text-danger">
                        Not Assigned
                      </span>
                    </td>
                    <td v-if="item.talent">
                      <span class="text-uppercase">{{ item.talent.name }}</span>
                    </td>
                    <td v-else>
                      <span class="text-uppercase text-info">
                        No Suggestion
                      </span>
                    </td>
                    <td class="text-uppercase">
                      <span class="badge-md badge-warning">
                        {{ item.status.state }}
                      </span>
                    </td>
                    <td>
                      {{ item.pic }}
                    </td>

                    <td v-if="item.talent">
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        data-toggle="modal"
                        data-target="#modal-suggestion-detail"
                        @click="selectSuggestion(item)"
                      >
                        Details & Response
                      </button>
                    </td>
                    <td v-else>
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        disabled
                      >
                        Details & Response
                      </button>
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
            <div
              v-if="CANDIDATE_CARDS.next || CANDIDATE_CARDS.previous"
              class="card-footer"
            >
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a
                      v-if="CANDIDATE_CARDS.previous"
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
                      v-if="CANDIDATE_CARDS.next"
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
    <div
      v-if="selectedSuggestion"
      id="modal-suggestion-detail"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal-suggestion-detail"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal- modal-dialog-centered modal-"
        role="document"
      >
        <div class="modal-content bg-transparent shadow-none">
          <div class="modal-header">
            <h6
              id="modal-title-suggestion-detail"
              class="modal-title text-primary"
            >
              Talent Suggestion Details
            </h6>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="text-white">×</span>
            </button>
          </div>

          <div class="modal-body py-0">
            <div
              class="card card-pricing bg-gradient-primary border-0 text-center mb-4"
            >
              <div class="card-header bg-transparent">
                <h3 class="text-uppercase ls-1 text-white py-3 mb-0">
                  {{ selectedSuggestion.talent.source }}
                </h3>
                <h5 class="text-white text-uppercase">
                  {{ selectedSuggestion.status.state }}
                </h5>
              </div>
              <div class="card-body px-lg-3">
                <div class="display-4 text-white">
                  {{ selectedSuggestion.talent.name }}
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <table class="table table-borderless my-3">
                        <tbody class="text-white text-left">
                          <tr>
                            <td>DOB :</td>
                            <td>
                              {{ selectedSuggestion.talent.dob }}
                            </td>
                          </tr>
                          <tr>
                            <td>GENDER :</td>
                            <td>
                              {{ selectedSuggestion.talent.gender }}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              LAST EDUCATION :
                            </td>
                            <td>
                              {{ selectedSuggestion.talent.last_education }}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              UNIVERSITY :
                            </td>
                            <td>
                              {{ selectedSuggestion.talent.university }}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              WORKING EXPERIENCE :
                            </td>
                            <td>
                              {{
                                selectedSuggestion.talent
                                  .total_working_experience
                              }}
                              Years
                            </td>
                          </tr>
                          <tr>
                            <td>
                              APPLIED POSITION :
                            </td>
                            <td>
                              {{ selectedSuggestion.talent.applied_position }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <a
                  type="button"
                  :href="selectedSuggestion.talent.cv"
                  target="_blank"
                  class="btn btn-secondary mb-3"
                >
                  Preview CV
                </a>
              </div>
            </div>
          </div>

          <div class="modal-footer pt-0">
            <button
              v-if="selectedSuggestion.status.id < 3"
              type="button"
              class="btn bg-success text-white mr-auto"
              @click="action(3)"
            >
              Proceed this Talent
            </button>
            <button
              v-if="selectedSuggestion.status.id < 3"
              type="button"
              class="btn bg-danger text-white mr-auto"
              @click="action(100)"
            >
              Decline this Talent
            </button>
            <button
              id="close-detail-modal"
              type="button"
              class="btn bg-gradient-primary text-white  ml-auto"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'div'],
  name: 'DIVCandidateCards',
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next',
      selectedSuggestion: null
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS'
    })
  },
  created() {
    this.GET_CANDIDATE_CARDS(this.page)
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD'
    }),
    getCandidateCards(page) {
      this.GET_CANDIDATE_CARDS(page)
    },
    changePage(change) {
      change === 'next' ? this.page++ : this.page--
    },
    selectSuggestion(item) {
      this.selectedSuggestion = item
    },
    async action(status) {
      const payload = {
        status
      }
      const cardId = this.selectedSuggestion.id
      try {
        await this.UPDATE_CANDIDATE_CARD({ payload, cardId })
        await this.getCandidateCards()
        document.getElementById('close-detail-modal').click()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style></style>
