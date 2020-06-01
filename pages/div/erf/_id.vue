<template>
  <div v-if="ERF">
    <client-only>
      <div
        class="header pb-6 d-flex align-items-center"
        style="min-height: 500px; background-image: url(https://images.unsplash.com/photo-1554224155-a1487473ffd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-position: center top;"
      >
        <!-- Mask -->
        <span class="mask bg-gradient-default opacity-8"></span>
        <!-- Header container -->
        <div class="container-fluid d-flex align-items-center">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h1 class="display-2 text-white">ERF Details</h1>
              <p class="text-white mt-0 mb-5">
                This is your ERF Details page, you can update here if you want.
              </p>
              <nuxt-link to="/div/erf">
                <a href="#!" class="btn btn-neutral">Back to ERFs</a>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col-xl-12 order-xl-1">
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">Employee Request Form</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-danger"
                      >Request to Close</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form>
                  <h6 class="heading-small text-muted mb-4">
                    Position Information
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-company"
                            >Company</label
                          >
                          <input
                            id="input-company"
                            type="text"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-date"
                            >Date</label
                          >
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text"
                                ><i class="ni ni-calendar-grid-58"></i
                              ></span>
                            </div>
                            <input
                              class="form-control"
                              placeholder="Select date"
                              type="date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-job-title"
                            >Job Title</label
                          >
                          <input
                            id="input-job-title"
                            type="text"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-quantity"
                            >Quantity</label
                          >
                          <input
                            id="input-quantity"
                            type="number"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-division"
                            >Division</label
                          >
                          <input
                            id="input-division"
                            type="text"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-branch"
                            >Branch</label
                          >
                          <input
                            id="input-branch"
                            type="text"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-department"
                            >Department</label
                          >
                          <input
                            id="input-department"
                            type="text"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label
                            class="form-control-label"
                            for="input-work-location"
                            >Work Location</label
                          >
                          <input
                            id="input-work-location"
                            type="text"
                            class="form-control"
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
                            class="form-control"
                            placeholder="Home Address"
                            value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-city"
                            >City</label
                          >
                          <input
                            id="input-city"
                            type="text"
                            class="form-control"
                            placeholder="City"
                            value="New York"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-country"
                            >Country</label
                          >
                          <input
                            id="input-country"
                            type="text"
                            class="form-control"
                            placeholder="Country"
                            value="United States"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-country"
                            >Postal code</label
                          >
                          <input
                            id="input-postal-code"
                            type="number"
                            class="form-control"
                            placeholder="Postal code"
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
                        rows="4"
                        class="form-control"
                        placeholder="A few words about you ..."
                      >
A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ERFDetail',
  computed: {
    ...mapGetters({
      ERF: 'erfs/ERF'
    })
  },

  created() {
    this.getERF(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getERF: 'erfs/GET_ERF'
    })
  }
}
</script>

<style></style>
