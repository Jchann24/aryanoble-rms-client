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
                        previousPage()
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
                        nextPage()
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
        <div class="modal-content">
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
                      type="text"
                      class="form-control"
                      :value="selectedTalent.name"
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
                      type="text"
                      class="form-control"
                      :value="selectedTalent.address"
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
                      type="text"
                      class="form-control"
                      :value="selectedTalent.applied_position"
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
                      type="text"
                      class="form-control"
                      :value="selectedTalent.dob"
                      :readonly="readonly"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="detail_email">E-mail</label>
                    <input
                      id="detail_email"
                      type="email"
                      class="form-control"
                      :value="selectedTalent.email"
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
                      type="text"
                      class="form-control"
                      :value="selectedTalent.gender"
                      :readonly="readonly"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="detail_last_education">Last Education</label>
                    <input
                      id="detail_last_education"
                      type="text"
                      class="form-control"
                      :value="selectedTalent.last_education"
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
                      type="text"
                      class="form-control"
                      :value="selectedTalent.mobile_phone"
                      :readonly="readonly"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="detail_nik">NIK</label>
                    <input
                      id="detail_nik"
                      type="text"
                      class="form-control"
                      :value="selectedTalent.nik"
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
                      type="text"
                      class="form-control"
                      :value="selectedTalent.total_working_experience"
                      :readonly="readonly"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="detail_university">University</label>
                    <input
                      id="detail_university"
                      type="text"
                      class="form-control"
                      :value="selectedTalent.university"
                      :readonly="readonly"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button
              v-if="readonly"
              type="button"
              class="btn btn-success mr-auto"
              @click="readonly = !readonly"
            >
              Edit
            </button>
            <button
              v-else
              type="button"
              class="btn btn-secondary mr-auto"
              @click="readonly = !readonly"
            >
              Cancel Edit
            </button>
            <button
              type="button"
              class="btn btn-link  ml-auto"
              data-dismiss="modal"
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
  name: 'PICPool',
  components: {
    addTalent
  },
  data() {
    return {
      page: 1,
      selectedTalent: {},
      readonly: true
    }
  },
  computed: {
    ...mapGetters({
      TALENTS: 'talent_pool/TALENTS'
    })
  },
  created() {
    this.getTalents(this.page)
  },
  methods: {
    ...mapActions({
      getTALENTS: 'talent_pool/GET_TALENTS'
    }),

    getTalents(page) {
      this.getTALENTS(page)
    },
    nextPage() {
      this.page++
    },
    previousPage() {
      this.page--
    },
    previewTalent(talent) {
      this.selectedTalent = talent
    },
    setReadonly() {
      this.readonly = true
    }
  }
}
</script>

<style></style>
