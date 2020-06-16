<template>
  <div
    id="modal-create"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalcreateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-secondary">
        <div class="modal-header">
          <h5 id="modalcreateLabel" class="modal-title">
            Create Account for This Talent
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
        <div class="modal-body">
          <div class="px-3 py-2 bg-secondary">
            <label for="create_name">Name</label>
            <input
              id="create_name"
              v-model="selectedTalent.name"
              type="text"
              class="form-control form-control-alternative"
            />
          </div>
          <div class="px-3 py-2 bg-secondary">
            <label for="create_username">Username</label>
            <input
              id="create_username"
              v-model="selectedTalent.username"
              type="text"
              class="form-control form-control-alternative"
            />
          </div>
          <div class="px-3 py-2 bg-secondary">
            <label for="create_email">Email</label>
            <input
              id="create_email"
              v-model="selectedTalent.email"
              type="email"
              class="form-control form-control-alternative"
            />
          </div>
          <div class="px-3 py-2 bg-secondary">
            <label for="create_password">Default Password</label>
            <input
              id="create_password"
              v-model="selectedTalent.password"
              type="password"
              class="form-control form-control-alternative"
            />
          </div>
          <p v-if="errors" class="text-danger text-sm px-3">
            Error, check your inputs. Possible duplicate username.
          </p>
        </div>
        <div class="modal-footer">
          <button
            id="close-create"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="clearForm"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="loading"
            @click="createAccount"
          >
            <div v-if="loading">
              Creating...
            </div>
            <div v-else>
              Create Account
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PICModalCreateAccount',
  props: {
    selectedTalent: {
      type: Object,
      default: () => {}
    },
    page: {
      type: Number,
      default: () => 1
    }
  },
  data() {
    return {
      loading: false,
      errors: false
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_ACCOUNT: 'candidate-accounts/CANDIDATE_ACCOUNT'
    })
  },
  methods: {
    ...mapActions({
      GET_TALENTS: 'talents/GET_TALENTS',
      CREATE_ACCOUNT: 'candidate-accounts/SAVE_CANDIDATE_ACCOUNT',
      PATCH_TALENT: 'talents/PATCH_TALENT'
    }),
    createAccount() {
      this.loading = true
      const form = {
        username: this.selectedTalent.username,
        email: this.selectedTalent.email,
        first_name: this.selectedTalent.name,
        last_name: 'Candidate',
        password: this.selectedTalent.password
      }
      const talentId = this.selectedTalent.id

      this.CREATE_ACCOUNT(form)
        .then(() => {
          const accountId = {
            candidate_account: this.CANDIDATE_ACCOUNT.id
          }

          this.PATCH_TALENT({ accountId, talentId })
            .then(
              () => document.getElementById('modal-create').click(),
              (this.errors = false)
            )
            .then(
              setTimeout(() => {
                this.GET_TALENTS(this.page)
              }, 1500)
            )

            .catch(() => (this.errors = true))
            .finally(() => (this.loading = false))
        })
        .catch(() => (this.errors = true))
        .finally(() => (this.loading = false))
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style></style>
