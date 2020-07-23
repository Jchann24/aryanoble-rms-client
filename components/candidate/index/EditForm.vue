<template>
  <div class="card">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 v-if="!loggedInUser.user_detail" class="mb-0">
            Create new latest details
          </h3>
          <h3 v-else class="mb-0">Update User Detail</h3>
        </div>
        <div class="col-4 text-right">
          <nuxt-link v-if="settingsBtn" to="/candidate/settings">
            <a href="#!" class="btn btn-sm btn-primary">Settings</a>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-if="form" class="card-body">
      <form @submit.prevent="saveDetail">
        <h6 class="heading-small text-muted mb-4">User information</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-control-label" for="input-full_name"
                  >Full Name</label
                >
                <input
                  id="input-full_name"
                  v-model="form.full_name"
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-control-label" for="input-dob"
                  >Date of Birth</label
                >
                <input
                  id="input-dob"
                  v-model="form.dob"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label class="form-control-label" for="input-phone"
                  >Phone</label
                >
                <input
                  id="input-phone"
                  v-model="form.phone_num"
                  type="text"
                  class="form-control"
                  placeholder="08158211111"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <h6 class="heading-small text-muted mb-4">Education</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-control-label" for="input-university"
                  >University</label
                >
                <input
                  id="input-university"
                  v-model="form.university"
                  type="text"
                  class="form-control"
                  placeholder="University"
                  required
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="form-control-label" for="input-degree"
                  >Degree</label
                >
                <input
                  id="input-degree"
                  v-model="form.degree"
                  type="text"
                  class="form-control"
                  placeholder="S.Kom"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label class="form-control-label" for="input-faculty"
                  >Faculty</label
                >
                <input
                  id="input-faculty"
                  v-model="form.faculty"
                  type="text"
                  class="form-control"
                  placeholder="Computer Science"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <!-- Address -->
        <h6 class="heading-small text-muted mb-4">
          Contact information
        </h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-control-label" for="input-address"
                  >Address</label
                >
                <input
                  id="input-address"
                  v-model="form.address"
                  class="form-control"
                  placeholder="Jalan Sudirman 123 Blok A No. 8"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="form-group">
                <label class="form-control-label" for="input-city">City</label>
                <input
                  id="input-city"
                  v-model="form.city"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Jakarta Pusat"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="form-control-label" for="input-province"
                  >Province</label
                >
                <input
                  id="input-province"
                  v-model="form.province"
                  type="text"
                  class="form-control"
                  required
                  placeholder="D.K.I Jakarta"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="form-control-label" for="input-postal-code"
                  >Postal code</label
                >
                <input
                  id="input-postal-code"
                  v-model="form.postal_code"
                  type="number"
                  class="form-control"
                  required
                  placeholder="132123"
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <!-- Description -->
        <h6 class="heading-small text-muted mb-4">About me</h6>
        <div class="pl-lg-4">
          <div class="form-group">
            <label class="form-control-label">About Me</label>
            <textarea
              v-model="form.about_me"
              rows="4"
              class="form-control"
              placeholder="A few words about you ..."
              required
            ></textarea>
          </div>
        </div>
        <div class="pl-lg-4">
          <div v-if="errors" class="alert alert-danger" role="alert">
            <p v-for="item in errors" :key="item.name">
              <strong> {{ item[0] }}</strong>
            </p>
          </div>
          <button
            v-if="!loading && !loggedInUser.user_detail"
            class="btn btn-block btn-success"
            type="submit"
          >
            Submit
          </button>
          <button
            v-else-if="!loading && loggedInUser.user_detail"
            class="btn btn-block btn-success"
            type="submit"
          >
            Update
          </button>
          <button v-else class="btn btn-block btn-success" disabled>
            Loading ...
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CandidateEditForm',
  data() {
    return {
      form: {},
      loading: false,
      errors: null,
      error: false
    }
  },
  computed: {
    ...mapGetters({
      loggedInUser: 'loggedInUser'
    }),
    settingsBtn() {
      return this.$route.name === 'candidate'
    }
  },
  created() {
    this.copyUserDetail()
  },
  methods: {
    ...mapActions({
      SAVE_USER_DETAIL: 'user-detail/SAVE_USER_DETAIL',
      UPDATE_USER_DETAIL: 'user-detail/UPDATE_USER_DETAIL',
      GET_ME: 'GET_ME'
    }),
    async saveDetail() {
      this.loading = true
      this.error = false
      if (!this.loggedInUser.user_detail) {
        try {
          await this.SAVE_USER_DETAIL(this.form)
          await this.GET_ME()
          this.toaster_success('Latest Detail Saved!')
        } catch (e) {
          this.error = true
          this.errors = e.response.data.errors
        } finally {
          this.loading = false
        }
      } else {
        try {
          const payload = this.form
          const userDetailId = this.form.id
          await this.UPDATE_USER_DETAIL({ payload, userDetailId })
        } catch (e) {
          this.error = true
          this.errors = e.response.data.errors
        } finally {
          this.loading = false
        }
      }
    },
    copyUserDetail() {
      if (this.loggedInUser.user_detail) {
        this.form = JSON.parse(JSON.stringify(this.loggedInUser.user_detail))
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
    }
  }
}
</script>

<style></style>
