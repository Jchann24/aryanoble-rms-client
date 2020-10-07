<template>
  <div class="pt-5 pb-9">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <img src="/img/logo.png" alt="" srcset="" width="175" />
          <p class="mt-2">Recruitment Management System</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-5">
          <h1>Hello, this ERF needs your review!</h1>
          <p v-if="erf.div_user">
            Submitted by: {{ erf.div_user.name }} / {{ erf.div_user.email }}
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <th scope="row">Title:</th>
                  <td>{{ erf.title }}</td>
                </tr>
                <tr>
                  <th scope="row">Company:</th>
                  <td>{{ erf.company }}</td>
                </tr>
                <tr>
                  <th scope="row">Job Title:</th>
                  <td>{{ erf.job_title }}</td>
                </tr>
                <tr>
                  <th scope="row">Quantity:</th>
                  <td>{{ erf.quantity }}</td>
                </tr>
                <tr>
                  <th scope="row">Division:</th>
                  <td>{{ erf.division }}</td>
                </tr>
                <tr>
                  <th scope="row">Branch:</th>
                  <td>{{ erf.branch }}</td>
                </tr>
                <tr>
                  <th scope="row">Department:</th>
                  <td>{{ erf.department }}</td>
                </tr>
                <tr>
                  <th scope="row">Work Location:</th>
                  <td>{{ erf.work_location }}</td>
                </tr>
                <tr>
                  <th scope="row">Employee Status:</th>
                  <td>{{ erf.employee_status }}</td>
                </tr>
                <tr>
                  <th scope="row">Purpose:</th>
                  <td>{{ erf.purpose }}</td>
                </tr>
                <tr>
                  <th scope="row">Working Hours:</th>
                  <td>{{ erf.working_hours }}</td>
                </tr>
                <tr>
                  <th scope="row">Position:</th>
                  <td>{{ erf.position }}</td>
                </tr>
                <tr>
                  <th scope="row">Planning:</th>
                  <td>{{ erf.planning }}</td>
                </tr>
                <tr>
                  <th scope="row">Business Justification:</th>
                  <td>
                    <p class="text-wrap" style="max-width: 100%">
                      {{ erf.business_justification }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Technical Competencies:</th>
                  <td>
                    <p class="text-wrap" style="max-width: 100%">
                      {{ erf.technical_competencies }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Gender:</th>
                  <td>{{ erf.sex }}</td>
                </tr>
                <tr>
                  <th scope="row">Age Range:</th>
                  <td>{{ erf.age_range_from }} - {{ erf.age_range_to }}</td>
                </tr>
                <tr>
                  <th scope="row">Education:</th>
                  <td>{{ erf.education }}</td>
                </tr>
                <tr>
                  <th scope="row">Minimum Experience:</th>
                  <td>{{ erf.min_experience }} Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div v-if="!erf.acceptance" class="row">
          <div class="col-12">
            <form>
              <div class="form-group">
                <label for="notesTextarea">Notes (optional)</label>
                <textarea
                  id="notesTextarea"
                  v-model="form.notes"
                  class="form-control"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div v-if="error" class="col-12">
            <div class="alert alert-danger" role="alert">
              {{ error }}
            </div>
          </div>
          <div class="col-12 text-right">
            <button
              class="btn btn-danger m-2"
              :disabled="disabled"
              @click="saveReview(0)"
            >
              Reject
            </button>
            <button
              class="btn btn-primary m-2"
              :disabled="disabled"
              @click="saveReview(1)"
            >
              Proceed
            </button>
          </div>
        </div>
        <div v-if="erf.acceptance">
          <div v-if="erf.acceptance.acceptance == 1" class="row pb-9 mt-4">
            <div class="col-12">
              <div class="alert alert-success" role="alert">
                Accepted! <br />
                Notes: <br />
                {{ erf.acceptance.notes }}
              </div>
            </div>
          </div>
          <div v-if="erf.acceptance.acceptance == 0" class="row pb-9 mt-4">
            <div class="col-12">
              <div class="alert alert-danger" role="alert">
                Rejected! <br />
                Notes: <br />
                {{ erf.acceptance.notes }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewERFPage',
  layout: 'nolayout',
  data() {
    return {
      erf: {},
      form: {
        notes: '',
        acceptance: null
      },
      loading: false,
      error: null
    }
  },
  computed: {
    disabled() {
      return this.erf.acceptance
    }
  },
  mounted() {
    this.getReviewErf()
  },
  methods: {
    async getReviewErf() {
      this.loading = true
      try {
        const res = await this.$axios.$get(
          `/review-erf/${this.$route.params.id}`
        )
        this.erf = res.data
      } catch (e) {
        alert(e.response.data.message)
      } finally {
        this.loading = false
      }
    },
    async saveReview(code) {
      this.loading = true
      this.form.acceptance = code
      this.form.erf_id = this.erf.id
      this.form.hashed = this.$route.params.id
      try {
        await this.$axios.$post(`/review-erf`, this.form)
        await this.clearForm()
        await this.getReviewErf()
      } catch (e) {
        this.error = e.response.data.error
        this.form.acceptance = null
        this.form.notes = ''
        setTimeout(() => (this.error = null), 10000)
      } finally {
        this.loading = false
      }
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style></style>
