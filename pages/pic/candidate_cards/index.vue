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
                        data-target="#exampleModal"
                        class="btn btn-sm btn-outline-danger"
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
      id="exampleModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
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
            ...
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
  name: 'CandidateCards',
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next'
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
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS'
    }),
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
