<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h3>Change Password</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <label class="form-control-label" for="input-old_password"
                >Old Password</label
              >
              <input
                id="input-old_password"
                v-model="form.oldPassword"
                type="password"
                class="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <label class="form-control-label" for="input-new_password"
                >New Password</label
              >
              <input
                id="input-new_password"
                v-model="form.newPassword"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <label class="form-control-label" for="input-c_password"
                >Confirm Password</label
              >
              <input
                id="input-c_password"
                v-model="form.newPassword_confirmation"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-muted text-sm">
              *PLEASE REMEMBER YOUR NEW PASSWORD, once changed you cannot revert
              back.
            </p>
          </div>
        </div>
        <div v-if="error" class="row">
          <div class="col-12">
            <div class="alert alert-danger" role="alert">
              {{ errors }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button
              v-if="!loading"
              class="btn btn-block btn-success"
              @click="updatePassword"
            >
              Change Password
            </button>
            <button v-else class="btn btn-block btn-success" disabled>
              Loading ...
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CandidateChangePassword',
  data() {
    return {
      form: {},
      loading: false,
      error: false,
      errors: null
    }
  },
  computed: {
    ...mapGetters({
      user: 'loggedInUser'
    })
  },
  methods: {
    async updatePassword() {
      this.loading = true
      try {
        await this.$axios.$post(`password-change/${this.user.id}`, this.form)
        this.toaster_success('Password Changed!')
        this.clearForm()
      } catch (e) {
        this.error = true
        this.errors = e.response.data.message
      } finally {
        this.loading = false
      }
    },
    toaster_success(mess) {
      this.$toast.show(`Success! ${mess}`, {
        theme: 'bubble',
        type: 'success',
        position: 'top-right',
        duration: 4000,
        icon: 'done'
      })
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style></style>
