<template>
  <div>
    <div
      class="header pb-6 d-flex align-items-center"
      style="min-height: 300px; background-size: cover; background-position: center top;"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <h1 class="display-2 text-white">Hello {{ user.name }}</h1>
            <p class="text-white mt-0 mb-5">
              This is your settings page, change your password and details here!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12 col-lg-8">
          <edit-form />
        </div>
        <div class="col-12 col-lg-4">
          <change-password />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditForm from '@/components/candidate/index/EditForm'
import ChangePassword from '@/components/candidate/settings/ChangePassword'
export default {
  middleware: ['auth', 'candidate'],
  name: 'CandidateSettings',
  components: {
    EditForm,
    ChangePassword
  },
  computed: {
    ...mapGetters({
      user: 'loggedInUser'
    })
  }
}
</script>

<style></style>
