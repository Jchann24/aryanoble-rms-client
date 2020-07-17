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
              <p class="text-white mt-0 mb-5">
                This is your ERF Details page.
              </p>
              <nuxt-link to="/div/erf">
                <a href="#!" class="btn btn-neutral">Back to ERFs</a>
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
                  <div class="col-8">
                    <h3 class="mb-0">Employee Request Form</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-danger"
                      >Request to Close</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-body">
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
                              value="Full-time"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-working-hours-1"
                              >Full - time</label
                            >
                          </div>
                          <div class="custom-control custom-radio">
                            <input
                              id="radio-working-hours-2"
                              v-model="ERF.working_hours"
                              type="radio"
                              name="working-hours-radio"
                              class="custom-control-input"
                              value="Part-time"
                              :disabled="readonly"
                            />
                            <label
                              class="custom-control-label"
                              for="radio-working-hours-2"
                              >Part - time</label
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
                          type="text"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['auth', 'div'],
  name: 'DivERFDetail',

  data() {
    return {
      readonly: true
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
    this.getERF(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getERF: 'erfs/GET_ERF'
    })
  }
}
</script>

<style></style>
