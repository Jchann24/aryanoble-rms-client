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
                        {{ item.status.id }} - {{ item.status.state }}
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
    <modal-action :selected-suggestion="selectedSuggestion" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ModalAction from '@/components/div_user/candidate_cards/ModalAction'
export default {
  middleware: ['auth', 'div'],
  name: 'DIVCandidateCards',
  components: {
    ModalAction
  },
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
    }
  }
}
</script>

<style></style>
