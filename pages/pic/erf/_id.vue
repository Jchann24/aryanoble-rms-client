<template>
  <div v-if="ERF">
    <client-only>
      <div
        class="header pb-6 d-flex align-items-center"
        style="min-height: 500px; background-image: url(https://images.unsplash.com/photo-1554224155-a1487473ffd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-position: center top;"
        crossorigin="anonymous"
      >
        <!-- Mask -->
        <span class="mask bg-gradient-default opacity-8"></span>
        <!-- Header container -->
        <div class="container-fluid d-flex align-items-center">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h1 class="display-2 text-white">ERF Details</h1>
              <p v-if="ERF" class="text-white mt-0 mb-2">
                Created by {{ ERF.div_user.name }}
              </p>
              <ul class="text-white">
                <li>Make candidate card to process this ERF.</li>
                <li>
                  Once candidate card created, you can view the card from
                  Candidate Cards Section
                </li>
              </ul>
              <nuxt-link to="/pic/erf">
                <a href="javascript:;" class="btn btn-neutral">Back to ERFs</a>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col-xl-12 order-xl-1">
            <div class="card p-3">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col-6">
                    <h3 class="mb-0">Employee Request Form</h3>
                    <div v-if="ERF.acceptance">
                      <h4
                        v-if="ERF.acceptance.acceptance == 1"
                        class="badge badge-primary"
                      >
                        This ERF is accepted by LHC Leader
                      </h4>
                      <h4
                        v-else-if="ERF.acceptance.acceptance == 0"
                        class="badge badge-danger"
                      >
                        This ERF is rejected by LHC Leader
                      </h4>
                      <h4
                        v-else-if="ERF.acceptance.acceptance == 100"
                        class="badge badge-danger"
                      >
                        This ERF is rejected by PIC
                      </h4>
                      <h4
                        v-else-if="ERF.acceptance.acceptance == 2"
                        class="badge badge-primary"
                      >
                        This ERF is accepted by Leader and PIC
                      </h4>
                    </div>
                    <div v-else>
                      <h4 class="badge badge-warning">
                        Waiting to be accepted by LHC Leader
                      </h4>
                    </div>
                  </div>
                  <div v-if="ERF.acceptance" class="col-6 text-right px-0">
                    <div
                      v-if="
                        ERF.acceptance.acceptance > 0 &&
                          ERF.acceptance.acceptance < 100
                      "
                    >
                      <button
                        v-if="ERF.acceptance.acceptance < 2"
                        type="button"
                        data-toggle="modal"
                        data-target="#rejectModal"
                        class="btn btn-outline-danger"
                      >
                        Reject ERF
                      </button>
                      <a
                        href="javascript:;"
                        class="btn btn-primary"
                        @click="newCard"
                        >Make Candidate Card</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div v-if="ERF.acceptance">
                  <div v-if="ERF.acceptance.acceptance == 0">
                    <div class="alert alert-danger" role="alert">
                      <strong>REJECTION NOTES: </strong>
                      {{ ERF.acceptance.notes }}
                    </div>
                  </div>
                  <div v-else-if="ERF.acceptance.acceptance == 1">
                    <div class="alert alert-primary" role="alert">
                      <strong>LHC LEADER NOTES: </strong>
                      {{ ERF.acceptance.notes }}
                    </div>
                  </div>
                </div>
                <div v-if="ERF.acceptance">
                  <div v-if="ERF.acceptance.acceptance == 100">
                    <div class="alert alert-danger" role="alert">
                      <strong>REJECTION NOTES BY PIC: </strong>
                      {{ ERF.acceptance.notes_by_pic }}
                    </div>
                  </div>
                  <div v-else-if="ERF.acceptance.acceptance == 2">
                    <div class="alert alert-primary" role="alert">
                      <strong>PIC NOTES: </strong>
                      {{ ERF.acceptance.notes_by_pic }} <br />
                      <strong>LHC LEADER NOTES: </strong>
                      {{ ERF.acceptance.notes }}
                    </div>
                  </div>
                </div>
                <form>
                  <h6 class="heading-small text-muted mb-4">
                    Position Information
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-company"
                            >Company</label
                          >
                          <input
                            id="input-company"
                            v-model="ERF.company"
                            type="text"
                            class="form-control"
                            :readonly="readonly"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-date"
                            >Date</label
                          >
                          <div class="input-group">
                            <input
                              v-model="ERF.created_at"
                              class="form-control"
                              placeholder="Select date"
                              type="datetime-local"
                              :readonly="readonly"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-job-title"
                            >Job Title</label
                          >
                          <input
                            id="input-job-title"
                            v-model="ERF.job_title"
                            type="text"
                            class="form-control"
                            :readonly="readonly"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-quantity"
                            >Quantity</label
                          >
                          <input
                            id="input-quantity"
                            v-model="ERF.quantity"
                            type="number"
                            min="1"
                            class="form-control"
                            :readonly="readonly"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-division"
                            >Division</label
                          >
                          <input
                            id="input-division"
                            v-model="ERF.division"
                            type="text"
                            class="form-control"
                            :readonly="readonly"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-branch"
                            >Branch</label
                          >
                          <input
                            id="input-branch"
                            v-model="ERF.branch"
                            type="text"
                            class="form-control"
                            :readonly="readonly"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-department"
                            >Department</label
                          >
                          <input
                            id="input-department"
                            v-model="ERF.department"
                            type="text"
                            class="form-control"
                            :readonly="readonly"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-work-location"
                            >Work Location</label
                          >
                          <input
                            id="input-work-location"
                            v-model="ERF.work_location"
                            type="text"
                            class="form-control"
                            :readonly="readonly"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                  <!-- Choices -->
                  <h6 class="heading-small text-muted mb-4">Choices</h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-address"
                            >Employee Status</label
                          >
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-employee-status-1"
                              v-model="ERF.employee_status"
                              type="radio"
                              name="status-radio"
                              class="custom-control-input"
                              value="Permanent"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-employee-status-1"
                              >Permanent</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-employee-status-2"
                              v-model="ERF.employee_status"
                              type="radio"
                              name="status-radio"
                              class="custom-control-input"
                              value="Contract"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-employee-status-2"
                              >Contract</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-employee-status-3"
                              v-model="ERF.employee_status"
                              type="radio"
                              name="status-radio"
                              class="custom-control-input"
                              value="Outsource / Internship"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-employee-status-3"
                              >Outsource / Internship</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-address"
                            >Purpose</label
                          >
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-purpose-1"
                              v-model="ERF.purpose"
                              type="radio"
                              name="purpose-radio"
                              class="custom-control-input"
                              value="New Position"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-purpose-1"
                              >New Position</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-purpose-2"
                              v-model="ERF.purpose"
                              type="radio"
                              name="purpose-radio"
                              class="custom-control-input"
                              value="Additional"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-purpose-2"
                              >Additional</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-purpose-3"
                              v-model="ERF.purpose"
                              type="radio"
                              name="purpose-radio"
                              class="custom-control-input"
                              value="Replacement"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-purpose-3"
                              >Replacement</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-address"
                            >Working - hours</label
                          >
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-working-hours-1"
                              v-model="ERF.working_hours"
                              type="radio"
                              name="working-hours-radio"
                              class="custom-control-input"
                              value="Full-Time"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-working-hours-1"
                              >Full-Time</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-working-hours-2"
                              v-model="ERF.working_hours"
                              type="radio"
                              name="working-hours-radio"
                              class="custom-control-input"
                              value="Part-Time"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-working-hours-2"
                              >Part-Time</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-address"
                            >Position</label
                          >
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-position-1"
                              v-model="ERF.position"
                              type="radio"
                              name="position-radio"
                              class="custom-control-input"
                              value="Leader"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-position-1"
                              >Leader (Section Head - up)</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-position-2"
                              v-model="ERF.position"
                              type="radio"
                              name="position-radio"
                              class="custom-control-input"
                              value="Non-leader"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-position-2"
                              >Non - leader</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-address"
                            >Planning</label
                          >
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-planning-1"
                              v-model="ERF.planning"
                              type="radio"
                              name="planning-radio"
                              class="custom-control-input"
                              value="Planned"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-planning-1"
                              >Planned (Based on MPP)</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-planning-2"
                              v-model="ERF.planning"
                              type="radio"
                              name="planning-radio"
                              class="custom-control-input"
                              value="Not Planned"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-planning-2"
                              >Not Planned</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                  <!-- Business justification -->
                  <h6 class="heading-small text-muted mb-4">
                    Business Justification
                  </h6>
                  <div class="pl-lg-4">
                    <div class="form-group">
                      <label class="form-control-label"
                        >Business situation & additional reasons
                        explanation</label
                      >
                      <textarea
                        v-model="ERF.business_justification"
                        rows="4"
                        class="form-control"
                        :readonly="readonly"
                      ></textarea>
                    </div>
                  </div>
                  <hr class="my-4" />
                  <!-- Technical Competencies -->
                  <h6 class="heading-small text-muted mb-4">
                    Technical Competencies
                  </h6>
                  <div class="pl-lg-4">
                    <div class="form-group">
                      <label class="form-control-label"
                        >Specific Technical Competencies</label
                      >
                      <textarea
                        v-model="ERF.technical_competencies"
                        rows="4"
                        class="form-control"
                        :readonly="readonly"
                      ></textarea>
                    </div>
                  </div>
                  <hr class="my-4" />
                  <!-- Additional Requirements -->
                  <h6 class="heading-small text-muted mb-4">
                    Additional Requirements
                  </h6>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address"
                          >Gender</label
                        >
                        <div class="custom-control custom-radio">
                          <input
                            id="radio-gender-1"
                            v-model="ERF.sex"
                            type="radio"
                            name="gender-radio"
                            class="custom-control-input"
                            value="Male"
                            :disabled="readonly"
                          />
                          <label
                            class="custom-control-label"
                            for="radio-gender-1"
                            >Male</label
                          >
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="radio-gender-2"
                            v-model="ERF.sex"
                            type="radio"
                            name="gender-radio"
                            class="custom-control-input"
                            value="Female"
                            :disabled="readonly"
                          />
                          <label
                            class="custom-control-label"
                            for="radio-gender-2"
                            >Female</label
                          >
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="radio-gender-3"
                            v-model="ERF.sex"
                            type="radio"
                            name="gender-radio"
                            class="custom-control-input"
                            value="Male / Female"
                            :disabled="readonly"
                          />
                          <label
                            class="custom-control-label"
                            for="radio-gender-3"
                            >Male / Female</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label" for="input-age-range"
                          >Age Range From</label
                        >
                        <input
                          id="input-age-range"
                          v-model="ERF.age_range_from"
                          type="number"
                          class="form-control"
                          :readonly="readonly"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label" for="input-age-range"
                          >Age Range To</label
                        >
                        <input
                          id="input-age-range"
                          v-model="ERF.age_range_to"
                          type="number"
                          class="form-control"
                          :readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-education"
                          >Education</label
                        >
                        <input
                          id="input-education"
                          v-model="ERF.education"
                          type="text"
                          class="form-control"
                          :readonly="readonly"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-min-exp"
                          >Minimum Experience</label
                        >
                        <input
                          id="input-min-exp"
                          v-model="ERF.min_experience"
                          type="number"
                          min="0"
                          class="form-control"
                          :readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
    <div
      id="rejectModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="rejectModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="rejectModalLabel" class="modal-title">
              Reject Confirmation
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
          <form @submit.prevent="rejectErf">
            <div class="modal-body">
              <div class="form-group">
                <label for="message-text" class="col-form-label"
                  >Rejection Notes:</label
                >
                <textarea v-model="reject_notes" class="form-control" required>
                </textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="modalRejectClose"
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="reject_notes = ''"
              >
                Close
              </button>
              <button type="submit" class="btn btn-danger">
                Reject ERF
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['auth', 'pic'],
  name: 'PICERFDetail',

  data() {
    return {
      readonly: true,
      erf_id: parseInt(this.$route.params.id),
      reject_notes: ''
    }
  },

  computed: {
    ...mapGetters({
      getErf: 'erfs/ERF'
    }),
    ERF() {
      return this.getErf.data
    }
  },

  created() {
    this.getERF(this.$route.params.id).catch(() =>
      this.$router.push('/pic/erf')
    )
  },
  methods: {
    ...mapActions({
      getERF: 'erfs/GET_ERF',
      createCard: 'candidate-cards/SAVE_CANDIDATE_CARD'
    }),

    async newCard() {
      const payload = {
        erf_id: this.erf_id
      }
      try {
        await this.createCard(payload)
        await this.updateAcceptance().then(() => {
          this.$router.push('/pic/candidate_cards')
        })
      } catch (err) {
        alert('Something went wrong')
      }
    },
    async updateAcceptance() {
      const form = {
        notes: 'ERF Accepted',
        acceptance: 2
      }
      try {
        await this.$axios.$patch(`review-erf/${this.$route.params.id}`, form)
      } catch (err) {
        throw alert(err.response.data.message)
      }
    },
    async rejectErf() {
      const form = {
        acceptance: 100,
        notes: this.reject_notes
      }

      try {
        await this.$axios.$patch(`review-erf/${this.$route.params.id}`, form)
        await this.getERF(this.$route.params.id)
        document.getElementById('modalRejectClose').click()
      } catch (err) {
        throw alert(err.response.data.message)
      }
    }
  }
}
</script>

<style></style>
