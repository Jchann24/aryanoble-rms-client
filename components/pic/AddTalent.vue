<template>
  <div>
    <button
      id="modal-btn"
      type="button"
      class="btn btn-icon btn-primary"
      data-toggle="modal"
      data-target="#modal-form"
    >
      <span class="btn-inner--icon">
        <i class="ni ni-ruler-pencil"></i>
      </span>
      <span class="btn-inner--text">Add New Talent</span>
    </button>
    <div
      id="modal-form"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal-form"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal- modal-dialog-centered modal-lg"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="card bg-secondary border-0 mb-0">
              <div class="card-body px-lg-4 py-lg-4">
                <div class="text-center text-muted mb-4">
                  Add New Talent
                </div>
                <form class="text-left" @submit.prevent="saveTalent">
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_name">Name</label>
                        <input
                          id="add_talent_name"
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
                          type="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="source">Source</label>
                    <select id="source" class="form-control">
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
                          type="date"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="add_talent_gender">Gender</label>
                        <select id="add_talent_gender" class="form-control">
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary my-4">
                      Submit
                    </button>
                  </div>
                </form>
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
  name: 'AddTalent',
  methods: {
    saveTalent() {
      document.getElementById('modal-btn').click()
    }
  }
}
</script>

<style></style>
