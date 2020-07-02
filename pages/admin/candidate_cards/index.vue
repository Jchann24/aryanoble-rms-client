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
                      Status
                    </th>
                    <th scope="col" class="sort">
                      Interview Detail
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
                    <td>
                      {{ item.pic }}
                    </td>
                    <td v-if="item.candidate">
                      {{ item.candidate.first_name }}
                    </td>
                    <td v-else-if="item.status.id === 100">
                      <span class="btn btn-sm btn-danger">DECLINED</span>
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
                    <td>{{ item.status.id }} - {{ item.status.state }}</td>
                    <td v-if="item.interview_detail">
                      Detail Set
                    </td>
                    <td v-else>
                      <span class="text-danger">No Detail</span>
                    </td>
                    <td class="p-0">
                      <button
                        v-if="item.candidate"
                        type="button"
                        class="btn btn-sm btn-info"
                        data-toggle="modal"
                        data-target="#modal-notification"
                        @click="selectCard(item)"
                      >
                        Actions
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
      id="modal-notification"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal-notification"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-light modal-dialog-centered modal-"
        role="document"
      >
        <div class="modal-content bg-gradient-info">
          <div class="modal-header">
            <h6 id="modal-title-notification" class="modal-title">
              Actions
            </h6>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="py-3 text-center">
              <div v-if="selectedCard" class="row">
                <div class="col-12">
                  <button
                    v-if="!selectedCard.interview_detail"
                    id="collapseInterviewDetail"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse-interview-detail"
                    aria-expanded="false"
                    aria-controls="collapseInterview"
                    class="btn btn-block btn-success"
                  >
                    Set Interview Detail
                  </button>
                  <button
                    v-else
                    type="button"
                    class="btn btn-block btn-success"
                    disabled
                  >
                    Interview Detail Set
                  </button>
                  <div id="collapse-interview-detail" class="collapse">
                    <div class="card card-body text-dark text-left mt-4">
                      <div class="form-group">
                        <label for="detail-location" class="form-control-label"
                          >Location</label
                        >
                        <input
                          id="detail-location"
                          v-model="detail.location"
                          class="form-control"
                          type="text"
                          placeholder="District 8"
                        />
                      </div>
                      <div class="form-group">
                        <label for="detail-datetime" class="form-control-label"
                          >Date Time</label
                        >
                        <input
                          id="detail-datetime"
                          v-model="detail.date_time"
                          class="form-control"
                          type="datetime-local"
                        />
                      </div>
                      <button
                        class="btn btn-primary"
                        @click="saveInterviewDetail"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-6">
                  <div v-if="selectedCard.candidate">
                    <button
                      v-if="!loading"
                      class="btn btn-block btn-danger"
                      @click="sendEmail(selectedCard.candidate.email)"
                    >
                      Update Notification
                    </button>
                    <button v-else class="btn btn-block btn-danger" disabled>
                      Sending Email...
                    </button>
                  </div>
                  <div v-else>
                    <button class="btn btn-block btn-danger" disabled>
                      Email Not Found
                    </button>
                  </div>
                </div>
                <div class="col-6">
                  <div v-if="selectedCard.status">
                    <button
                      v-if="selectedCard.status.id === 5 && !formLoading"
                      class="btn btn-block btn-warning"
                      @click="sendForm(selectedCard.candidate.email)"
                    >
                      Form Email
                    </button>
                    <button
                      v-else-if="selectedCard.status.id === 5 && formLoading"
                      class="btn btn-block btn-warning"
                      disabled
                    >
                      Sending Form...
                    </button>
                    <button v-else class="btn btn-block btn-warning" disabled>
                      Form Email
                    </button>
                  </div>
                </div>
              </div>

              <div class="container mt-4 ">
                <div class="row">
                  <div class="col-12">
                    <ul class="pb-0 mb-0 text-left">
                      <li>
                        Update Notification: Send Email Update Notification
                      </li>
                      <li>Form Email: Send Email for Candidate Form</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-link text-white ml-auto"
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
  middleware: ['auth', 'admin'],
  name: 'AdminCandidateCards',
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next',
      selectedCard: {},
      loading: false,
      formLoading: false,
      detail: {
        location: '',
        date_time: null
      }
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
    this.GET_CANDIDATE_CARDS(this.page)
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',
      SAVE_INTERVIEW_DETAIL: 'interview-detail/SAVE_INTERVIEW_DETAIL',
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD'
    }),

    async saveInterviewDetail() {
      try {
        await this.SAVE_INTERVIEW_DETAIL(this.detail)
        const payload = {
          status: 5,
          interview_detail: this.INTERVIEW_DETAIL.id
        }
        const cardId = this.selectedCard.id
        await this.UPDATE_CANDIDATE_CARD({ payload, cardId })
        await this.GET_CANDIDATE_CARDS()
        document.getElementById('modal-notification').click()
        document.getElementById('collapseInterviewDetail').click()
        this.clearForm()
        this.toaster_success('Interview Detail Saved!')
      } catch (e) {
        alert(e)
      }
    },
    getCandidateCards(page) {
      this.GET_CANDIDATE_CARDS(page)
    },
    changePage(change) {
      change === 'next' ? this.page++ : this.page--
    },

    selectCard(object) {
      const card = object
      this.selectedCard = JSON.parse(JSON.stringify(card))
    },
    async sendEmail(email) {
      this.loading = true
      const payload = {
        email
      }
      try {
        await this.$axios.$post('email/', payload)
        this.toaster(email)
      } catch (e) {
        alert(e)
      } finally {
        this.loading = false
      }
    },
    async sendForm(email) {
      this.formLoading = true
      const receiver = {
        email
      }
      const payload = {
        status: 6
      }
      const cardId = this.selectedCard.id

      try {
        await this.$axios.$post('send-form/', receiver)
        await this.UPDATE_CANDIDATE_CARD({ payload, cardId })
        await this.GET_CANDIDATE_CARDS()
        this.toaster(email)
        document.getElementById('modal-notification').click()
        this.clearForm()
      } catch (e) {
        alert(e)
      } finally {
        this.formLoading = false
      }
    },
    toaster(email) {
      this.$toast.show(`Email Sent to ${email}!`, {
        theme: 'bubble',
        type: 'success',
        position: 'top-right',
        duration: 4000,
        icon: 'done'
      })
    },
    toaster_success(mess) {
      this.$toast.show(`Success! ${mess}`, {
        theme: 'bubble',
        type: 'success',
        position: 'top-right',
        duration: 4000,
        icon: 'done'
      })
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style></style>
