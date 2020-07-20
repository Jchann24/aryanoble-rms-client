<template>
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
                      v-if="!detailLoading"
                      class="btn btn-primary"
                      @click="saveInterviewDetail"
                    >
                      Submit
                    </button>
                    <button v-else class="btn btn-primary" disabled>
                      Loading ...
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AdminModalActions',
  props: {
    selectedCard: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      formLoading: false,
      detail: {
        location: '',
        date_time: null
      },
      loading: false,
      detailLoading: false
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS',
      INTERVIEW_DETAIL: 'interview-detail/INTERVIEW_DETAIL',
      CANDIDATE_CARD: 'candidate-cards/CANDIDATE_CARD'
    })
  },
  methods: {
    ...mapActions({
      SAVE_INTERVIEW_DETAIL: 'interview-detail/SAVE_INTERVIEW_DETAIL',
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD'
    }),

    async saveInterviewDetail() {
      this.detailLoading = true
      try {
        await this.SAVE_INTERVIEW_DETAIL(this.detail)
        const payload = {
          status_id: 5,
          interview_detail_id: this.INTERVIEW_DETAIL.data.id
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
      } finally {
        this.detailLoading = false
      }
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
