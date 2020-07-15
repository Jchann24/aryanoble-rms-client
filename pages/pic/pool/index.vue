<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-12">
              <h6 class="h2 text-white d-inline-block mb-0">Talent Pool</h6>
              <p class="text-white">These are talents from various sources.</p>
              <ul class="text-white">
                <li>
                  Add new talent to create more.
                </li>
                <li>
                  Details to view details / update the selected talent.
                </li>
                <li>
                  Create account to create account for the selected talent.
                </li>
                <li>
                  Account details to see the account username and email for the
                  selected talent.
                </li>
              </ul>
              <p class="text-white">
                Once you created account for the talent. He / She will receive
                the username and password to access the platform. Talent who has
                account can access this application.
              </p>
            </div>
            <div class="col-lg-6 col-12 text-right">
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
            <div v-if="TALENTS.data" class="table-responsive mb-5">
              <table class="table align-items-center table-white table-hover">
                <thead class="bg-gradient-gray text-white">
                  <tr>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      Source
                    </th>
                    <th scope="col">
                      Last Education
                    </th>
                    <th scope="col">
                      Added By
                    </th>
                    <th scope="col">
                      CV
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="talent in TALENTS.data" :key="talent.id">
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
                      {{ talent.pic.name }}
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
                    <td class="text-nowrap text-right">
                      <button
                        type="button"
                        class="btn btn-primary mr-3"
                        data-toggle="modal"
                        data-target="#modal-default"
                        @click="previewTalent(talent)"
                      >
                        Details
                      </button>
                      <button
                        v-if="talent.candidate_account"
                        type="button"
                        class="btn btn-success"
                        data-toggle="modal"
                        data-target="#modal-account-detail"
                        @click="previewAccount(talent.candidate_account)"
                      >
                        Account Details
                      </button>
                      <button
                        v-else
                        type="button"
                        class="btn btn-warning"
                        data-toggle="modal"
                        data-target="#modal-create"
                        @click="previewTalent(talent)"
                      >
                        Create Account
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="col my-4 mx-4">
              <content-placeholders :rounded="true">
                <content-placeholders-heading />
                <content-placeholders-text :lines="5" />
              </content-placeholders>
            </div>
            <div v-if="TALENTS.links || TALENTS.links" class="card-footer">
              <div ref="loadingContainer"></div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a
                      v-if="TALENTS.links.prev && !loading"
                      class="page-link"
                      href="javascript:"
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
                      v-if="TALENTS.links.next && !loading"
                      class="page-link"
                      href="javascript:"
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

    <!-- MODALS -->
    <modal-edit :selected-talent="selectedTalent" />
    <modal-create-account :selected-talent="selectedTalent" :page="page" />
    <modal-candidate-detail />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import addTalent from '@/components/pic/pool/AddTalent.vue'
import modalEdit from '@/components/pic/pool/ModalEdit.vue'
import modalCreateAccount from '@/components/pic/pool/ModalCreateAccount.vue'
import modalCandidateDetail from '@/components/pic/pool/ModalCandidateDetail.vue'

export default {
  middleware: ['auth', 'pic'],
  name: 'PICPool',
  components: {
    addTalent,
    modalEdit,
    modalCreateAccount,
    modalCandidateDetail
  },
  data() {
    return {
      page: 1,
      selectedTalent: {},
      next: 'next',
      prev: 'prev',
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      TALENTS: 'talents/TALENTS'
    })
  },
  watch: {},
  created() {
    this.getTalents(this.page)
  },
  methods: {
    ...mapActions({
      GET_TALENTS: 'talents/GET_TALENTS',
      GET_CANDIDATE_ACCOUNT: 'candidate-accounts/GET_CANDIDATE_ACCOUNT'
    }),
    previewAccount(account) {
      this.GET_CANDIDATE_ACCOUNT(account)
    },
    async getTalents(page) {
      this.loading = true
      const loader = this.$loading.show({
        container: this.$refs.loadingContainer
      })
      try {
        await this.GET_TALENTS(page)
      } catch (e) {
        this.page--
      } finally {
        this.loading = false
        loader.hide()
      }
    },
    changePage(change) {
      change === 'next' ? this.page++ : this.page--
    },
    previewTalent(talent) {
      const preview = talent
      this.selectedTalent = JSON.parse(JSON.stringify(preview))
      if (this.selectedTalent.candidate_account === null) {
        this.selectedTalent.candidate_account = ''
      }
    }
  }
}
</script>

<style></style>
