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
                      Candidate Email
                    </th>
                    <th scope="col" class="sort">
                      Talent Suggestion
                    </th>
                    <th scope="col" class="sort">
                      Status
                    </th>
                    <th scope="col" class="sort">
                      ERF By
                    </th>
                    <th scope="col" class="sort">
                      Created At
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in CANDIDATE_CARDS.data" :key="item.id">
                    <td>
                      {{ item.erf.title }}
                    </td>
                    <td v-if="item.candidate">
                      {{ item.candidate.email }}
                    </td>
                    <td v-else-if="item.status.id !== 3">
                      <span class="text-danger">Cannot Assign Account</span>
                    </td>
                    <td v-else>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#modal-assign"
                        class="btn btn-sm btn-outline-danger"
                        @click="GET_CANDIDATE_ACCOUNTS(), selectCard(item.id)"
                      >
                        Not Assigned
                      </button>
                    </td>
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
                    <td>{{ item.status.id }} - {{ item.status.state }}</td>
                    <td>
                      {{ item.erf.div_user.name }}
                    </td>
                    <td class="budget">
                      {{
                        item.created_at
                          | moment('dddd, MMMM Do YYYY | hh:mm:ss')
                      }}
                    </td>
                    <td>
                      <!-- <nuxt-link> -->
                      <button type="button" class="btn btn-icon btn-primary">
                        <span class="btn-inner--text">Details</span>
                      </button>
                      <!-- </nuxt-link> -->
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
    this.GET_CANDIDATE_CARDS(this.page)
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
    getCandidateCards(page) {
      this.GET_CANDIDATE_CARDS(page)
    },
    changePage(change) {
      change === 'next' ? this.page++ : this.page--
    }
  }
}
</script>

<style></style>
