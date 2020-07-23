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
                v-model="form.old_password"
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
                v-model="form.new_password"
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
                v-model="form.c_password"
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
        <div class="row">
          <div class="col-12">
            <button class="btn btn-block btn-success">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CandidateChangePassword',
  data() {
    return {
      form: {}
    }
  }
}
</script>

<style></style>
