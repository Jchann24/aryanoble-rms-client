<template>
  <div>
    <button
      id="modal-btn-add-talent"
      type="button"
      class="btn btn-icon btn-primary"
      data-toggle="modal"
      data-target="#modal-add-talent"
    >
      <span class="btn-inner--icon">
        <i class="ni ni-ruler-pencil"></i>
      </span>
      <span class="btn-inner--text">Add New Talent</span>
    </button>
    <div
      id="modal-add-talent"
      class="modal fade"
      tabindex="-2"
      role="dialog"
      aria-labelledby="modal-add-talent"
      aria-hidden="true"
      data-keyboard="false"
    >
      <div
        class="modal-dialog modal- modal-dialog-centered modal-lg"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="card bg-secondary border-0 mb-0">
              <div class="card-body px-lg-4 py-lg-4">
                <div class="text-center text-muted mb-4">Add New Talent</div>
                <div class="text-left">
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_name">Name</label>
                        <input
                          id="add_talent_name"
                          v-model="form.name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_email">Email address</label>
                        <input
                          id="add_talent_email"
                          v-model="form.email"
                          type="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="source">Source</label>
                    <select
                      id="source"
                      v-model="form.source"
                      class="form-control"
                    >
                      <option>Kalibrr</option>
                      <option>JobStreet</option>
                      <option>Internal Referral</option>
                      <option>Indeed</option>
                      <option>LinkedIn</option>
                      <option>HeadHunter</option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_address">Address</label>
                        <input
                          id="add_talent_address"
                          v-model="form.address"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_applied_position"
                          >Applied Position</label
                        >
                        <input
                          id="add_talent_applied_position"
                          v-model="form.applied_position"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_dob">Date of Birth</label>
                        <input
                          id="add_talent_dob"
                          v-model="form.dob"
                          type="date"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_gender">Gender</label>
                        <select
                          id="add_talent_gender"
                          v-model="form.gender"
                          class="form-control"
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_last_education"
                          >Last Education</label
                        >
                        <input
                          id="add_talent_last_education"
                          v-model="form.last_education"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_mobile_phone"
                          >Mobile Phone</label
                        >
                        <input
                          id="add_talent_mobile_phone"
                          v-model="form.mobile_phone"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_nik">NIK</label>
                        <input
                          id="add_talent_nik"
                          v-model="form.nik"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_total_working_experience"
                          >Total Working Exp</label
                        >
                        <input
                          id="add_talent_total_working_experience"
                          v-model="form.total_working_experience"
                          type="number"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_university">University</label>
                        <input
                          id="add_talent_university"
                          v-model="form.university"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_cv">Upload CV (.pdf)</label>

                        <div class="custom-file">
                          <input
                            id="add_talent_cv"
                            type="file"
                            class="custom-file-input"
                            accept="application/pdf"
                            @change="selectFile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    v-if="error_alert"
                    class="badge-md badge-pill badge-danger text-center"
                  >
                    <small
                      >Error! Something went wrong! Check your inputs!</small
                    >
                  </p>
                  <div class="text-center">
                    <button
                      type="button"
                      class="btn btn-primary my-4"
                      @click="saveTalent"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger my-4"
                      data-dismiss="modal"
                      aria-label="Close"
                      @click="
                        error_alert = false
                        clearForm()
                      "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTalent',
  data() {
    return {
      form: {
        name: '',
        source: '',
        address: '',
        applied_position: '',
        dob: '',
        email: '',
        gender: '',
        last_education: '',
        mobile_phone: '',
        nik: '',
        total_working_experience: null,
        university: ''
      },
      file: null,
      error_alert: false
    }
  },
  methods: {
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    selectFile(e) {
      const file = e.target.files[0]
      this.file = file
    },
    ...mapActions({
      SAVE_TALENT: 'talent_pool/SAVE_TALENT',
      GET_TALENTS: 'talent_pool/GET_TALENTS'
    }),
    async saveTalent() {
      const formData = new FormData()

      const entries = Object.entries(this.form)
      for (const [formName, value] of entries) {
        formData.append(`${formName}`, `${value}`)
      }
      formData.append('cv', this.file)

      try {
        await this.SAVE_TALENT(formData)
        await this.GET_TALENTS()
        document.getElementById('modal-btn-add-talent').click()
        this.error_alert = false
        this.clearForm()
      } catch (err) {
        this.error_alert = true
      }
    }
  }
}
</script>

<style></style>
