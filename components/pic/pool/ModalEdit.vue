<template>
  <div
    id="modal-default"
    class="modal fade"
    tabindex="-1"
    data-backdrop="static"
    data-keyboard="false"
    role="dialog"
    aria-labelledby="modal-default"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal- modal-dialog-centered modal-lg"
      role="document"
    >
      <div class="modal-content bg-secondary">
        <div class="modal-header">
          <h6 id="modal-title-default" class="modal-title ml-2">
            Talent Details

            <span v-if="!readonly" class="badge badge-pill badge-success"
              >Edit Mode</span
            >
          </h6>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="clearForm"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_name">Name</label>
                  <input
                    id="detail_name"
                    v-model="selectedTalent.name"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_source">Source</label>
                  <select
                    id="detail_source"
                    class="form-control"
                    :disabled="readonly"
                  >
                    <option>{{ selectedTalent.source }}</option>
                    <option>Kalibrr</option>
                    <option>Jobstreet</option>
                    <option>...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_address">Address</label>
                  <input
                    id="detail_address"
                    v-model="selectedTalent.address"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_applied_position">Applied Position</label>
                  <input
                    id="detail_applied_position"
                    v-model="selectedTalent.applied_position"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_dob">Date of Birth</label>
                  <input
                    id="detail_dob"
                    v-model="selectedTalent.dob"
                    type="date"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_email">E-mail</label>
                  <input
                    id="detail_email"
                    v-model="selectedTalent.email"
                    type="email"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_gender">Gender</label>
                  <input
                    id="detail_gender"
                    v-model="selectedTalent.gender"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_last_education">Last Education</label>
                  <input
                    id="detail_last_education"
                    v-model="selectedTalent.last_education"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_mobile_phone">Mobile Phone</label>
                  <input
                    id="detail_mobile_phone"
                    v-model="selectedTalent.mobile_phone"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_nik">NIK</label>
                  <input
                    id="detail_nik"
                    v-model="selectedTalent.nik"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_total_working_experience"
                    >Working Experience</label
                  >
                  <input
                    id="detail_total_working_experience"
                    v-model="selectedTalent.total_working_experience"
                    type="number"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="detail_university">University</label>
                  <input
                    id="detail_university"
                    v-model="selectedTalent.university"
                    type="text"
                    class="form-control"
                    :readonly="readonly"
                  />
                </div>
              </div>
            </div>
            <div v-if="!readonly" class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="detail_cv">Update New CV</label>
                  <input
                    id="detail_cv"
                    type="file"
                    class="form-control"
                    accept="application/pdf"
                    :readonly="readonly"
                    @change="selectFile"
                  />
                </div>
              </div>
            </div>
          </form>
          <div v-if="errors" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
        </div>

        <div class="modal-footer">
          <div v-if="readonly">
            <button
              type="button"
              class="btn btn-success mr-auto"
              @click="readonly = false"
            >
              Edit
            </button>
          </div>
          <div v-else>
            <button
              type="button"
              class="btn btn-secondary mr-auto"
              @click="readonly = true"
            >
              Cancel Edit
            </button>
            <button
              type="button"
              class="btn btn-success mr-auto"
              @click="updateTalent"
            >
              Save Updates
            </button>
          </div>
          <button
            id="close-detail"
            type="button"
            class="btn btn-link  ml-auto"
            data-dismiss="modal"
            @click="clearForm()"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PICModalEdit',
  props: {
    selectedTalent: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      readonly: true,
      errors: false,
      loading: false,
      file: null,
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions({
      GET_TALENTS: 'talents/GET_TALENTS',
      UPDATE_TALENT: 'talents/UPDATE_TALENT'
    }),
    selectFile(e) {
      const file = e.target.files[0]
      this.file = file
    },
    async updateTalent() {
      this.$delete(this.selectedTalent, 'cv')
      const talentId = this.selectedTalent.id
      const formData = new FormData()

      const entries = Object.entries(this.selectedTalent)
      for (const [formName, value] of entries) {
        formData.append(`${formName}`, `${value}`)
      }
      if (this.file) {
        formData.append('cv', this.file)
      }

      try {
        await this.UPDATE_TALENT({ formData, talentId })
        await this.GET_TALENTS()
        document.getElementById('close-detail').click()
        this.errors = false
        this.clearForm()
      } catch (err) {
        this.errorMessage = err.response.data.message
        this.errors = true
      }
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    setReadonly() {
      this.readonly = true
    }
  }
}
</script>

<style></style>
