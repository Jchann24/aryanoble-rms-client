<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-4">
              <h6 class="h2 text-white d-inline-block mb-0">Talent Pool</h6>
            </div>
            <div class="col-lg-6 col-8 text-right">
              <add-talent />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h1>Talents</h1>
            </div>
            <div class="table-responsive mb-5">
              <table class="table align-items-center table-white table-hover">
                <thead class="bg-gradient-gray text-white">
                  <tr>
                    <th scope="col" class="sort">
                      Name
                    </th>
                    <th scope="col" class="sort">
                      Source
                    </th>
                    <th scope="col" class="sort">
                      Last Education
                    </th>
                    <th scope="col" class="sort">
                      Added By
                    </th>
                    <th scope="col" class="sort">
                      CV
                    </th>
                    <th scope="col" class="sort"></th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="talent in TALENTS.results" :key="talent.id">
                    <td>
                      {{ talent.name }}
                    </td>
                    <td>
                      {{ talent.source }}
                    </td>
                    <td>
                      {{ talent.last_education }}
                    </td>
                    <td>
                      {{ talent.pic }}
                    </td>
                    <td>
                      <a
                        v-if="talent.cv"
                        target="_blank"
                        class="btn btn-secondary btn-sm"
                        :href="talent.cv"
                      >
                        Preview
                      </a>
                      <a
                        v-else
                        disabled
                        class="btn btn-secondary btn-sm disabled text-danger"
                      >
                        Unavailable
                      </a>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary float-right"
                        data-toggle="modal"
                        data-target="#modal-default"
                        @click="
                          previewTalent(talent)
                          setReadonly()
                        "
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="TALENTS.next || TALENTS.previous" class="card-footer">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a
                      v-if="TALENTS.previous"
                      class="page-link"
                      href="#!"
                      @click="
                        changePage(prev)
                        getTalents(page)
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
                      v-if="TALENTS.next"
                      class="page-link"
                      href="#!"
                      @click="
                        changePage(next)
                        getTalents(page)
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
      id="modal-default"
      class="modal fade"
      tabindex="-1"
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
                    <label for="detail_applied_position"
                      >Applied Position</label
                    >
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
          </div>

          <div class="modal-footer">
            <div v-if="readonly">
              <button
                type="button"
                class="btn btn-success mr-auto"
                @click="readonly = !readonly"
              >
                Edit
              </button>
            </div>
            <div v-else>
              <button
                type="button"
                class="btn btn-secondary mr-auto"
                @click="readonly = !readonly"
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import addTalent from '@/components/pic/AddTalent.vue'
export default {
  middleware: ['auth', 'pic'],
  name: 'PICPool',
  components: {
    addTalent
  },
  data() {
    return {
      page: 1,
      selectedTalent: {},
      file: '',
      readonly: true,
      next: 'next',
      prev: 'prev',
      errors: false
    }
  },
  computed: {
    ...mapGetters({
      TALENTS: 'talents/TALENTS'
    })
  },
  created() {
    this.getTalents(this.page)
  },
  methods: {
    ...mapActions({
      GET_TALENTS: 'talents/GET_TALENTS',
      UPDATE_TALENT: 'talents/UPDATE_TALENT'
    }),
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    selectFile(e) {
      const file = e.target.files[0]
      this.file = file
    },
    async updateTalent() {
      const talentId = this.selectedTalent.id
      const formData = new FormData()

      const entries = Object.entries(this.selectedTalent)
      for (const [formName, value] of entries) {
        formData.append(`${formName}`, `${value}`)
      }
      formData.append('cv', this.file)

      try {
        await this.UPDATE_TALENT({ formData, talentId })
        await this.GET_TALENTS()
        document.getElementById('close-detail').click()
        this.errors = false
        this.clearForm()
      } catch (err) {
        this.errors = true
      }
    },
    getTalents(page) {
      this.GET_TALENTS(page)
    },
    changePage(change) {
      change === 'next' ? this.page++ : this.page--
    },
    previewTalent(talent) {
      const preview = talent
      this.selectedTalent = JSON.parse(JSON.stringify(preview))
    },
    setReadonly() {
      this.readonly = true
    }
  }
}
</script>

<style></style>
