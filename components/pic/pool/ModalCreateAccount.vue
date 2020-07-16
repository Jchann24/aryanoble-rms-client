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
            <label for="create_email">Email</label>
            <input
              id="create_email"
              v-model="selectedTalent.email"
              type="email"
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
    async createAccount() {
      this.loading = true
      const form = {
        email: this.selectedTalent.email,
        name: this.selectedTalent.name
      }
      const talentId = this.selectedTalent.id
      try {
        await this.CREATE_ACCOUNT(form)
        const accountId = {
          candidate_account_id: this.CANDIDATE_ACCOUNT.data.id
        }
        await this.PATCH_TALENT({ accountId, talentId })
        document.getElementById('modal-create').click()
        this.errors = false

        await this.GET_TALENTS(this.page)

        this.toaster_success('Account Created!')
      } catch (e) {
        this.errors = true
        setTimeout(() => {
          this.errors = false
        }, 3000)
      } finally {
        this.loading = false
      }
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    toaster_success(mess) {
      this.$toast.show(`Success! ${mess}`, {
        theme: 'bubble',
        type: 'success',
        position: 'top-right',
        duration: 4000,
        icon: 'done'
      })
    }
  }
}
</script>

<style></style>
