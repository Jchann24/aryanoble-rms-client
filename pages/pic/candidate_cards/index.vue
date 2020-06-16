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
                  Click Not Assigned button to assign Candidate Account to the
                  Card.
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
                      Candidate
                    </th>
                    <th scope="col" class="sort">
                      Status
                    </th>
                    <th scope="col" class="sort">
                      Created At
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in CANDIDATE_CARDS.results" :key="item.id">
                    <td>
                      {{ item.erf.title }}
                    </td>
                    <td v-if="item.candidate">
                      {{ item.candidate }}
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
                    <td>
                      {{ item.status }}
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
    <div
      id="modal-assign"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              Assign Candidate Account to this Candidate Card
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12 px-3">
                <div
                  v-if="searchAlert"
                  class="alert alert-success"
                  role="alert"
                >
                  <strong>Searched!</strong> Username list has been updated!
                </div>
              </div>
            </div>
            <div class="input-group mb-3 px-3">
              <input
                v-model="searchInput"
                type="text"
                class="form-control"
                placeholder="Search username ..."
                @keydown.enter="searchAccounts"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  :disabled="disabled"
                  @click="searchAccounts"
                >
                  Search
                </button>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <label for="username-select">Usernames</label>

                  <select
                    id="username-select"
                    v-model="selectedAccount"
                    class="form-control"
                  >
                    <option
                      v-for="item in CANDIDATE_ACCOUNTS.results"
                      :key="item.id"
                      :value="item.username"
                      >{{ item.username }}</option
                    >
                  </select>
                  <p>
                    <small class="text-warning"
                      >If you cannot find the username, please use the search
                      above.</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer pt-0">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="clearForm"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              :disabled="disableSave"
              @click="patchCandidateCard"
            >
              Save changes
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
  middleware: ['auth', 'pic'],
  name: 'PICCandidateCards',
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next',
      selectedCard: 0,
      selectedAccount: '',
      searchInput: '',
      searchAlert: false
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS',
      CANDIDATE_ACCOUNTS: 'candidate-accounts/CANDIDATE_ACCOUNTS'
    }),
    disabled() {
      return this.searchInput === ''
    },
    disableSave() {
      return this.selectedAccount === ''
    }
  },
  created() {
    this.GET_CANDIDATE_CARDS(this.page)
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',
      GET_CANDIDATE_ACCOUNTS: 'candidate-accounts/GET_CANDIDATE_ACCOUNTS',
      SEARCH_CANDIDATE_ACCOUNTS: 'candidate-accounts/SEARCH_CANDIDATE_ACCOUNTS',
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD'
    }),
    selectCard(id) {
      this.selectedCard = id
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    patchCandidateCard() {
      const payload = {
        candidate: this.selectedAccount
      }
      const cardId = this.selectedCard
      this.UPDATE_CANDIDATE_CARD({ payload, cardId }).then(() => {
        this.GET_CANDIDATE_CARDS().then(() => {
          document.getElementById('modal-assign').click()
        })
      })
    },
    searchAccounts() {
      this.SEARCH_CANDIDATE_ACCOUNTS(this.searchInput)
        .then((this.searchAlert = true))
        .then(
          setTimeout(() => {
            this.searchAlert = false
          }, 1000 * 10)
        )
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
