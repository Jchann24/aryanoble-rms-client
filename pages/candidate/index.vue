<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">
                Dashboard Candidate
              </h6>
              <p class="text-white">
                Welcome to Arya Noble's Recruitment System!
              </p>
            </div>
          </div>
          <!-- Card stats -->
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div v-if="card" class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2">
          <div class="card card-profile">
            <img
              src="/img/candidate/bg-candidate-card.jfif"
              alt="Image placeholder"
              class="card-img-top"
              style="object-fit: cover;"
            />
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      src="assets/img/theme/team-4.jpg"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-sm btn-info  mr-4 "
                  >Interview Details</a
                >
                <a href="#" class="btn btn-sm btn-default float-right"
                  >Change Picture</a
                >
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="text-center mt-3">
                <h5 class="h3">
                  {{ card.talent.name }}
                </h5>
                <div class="h5 font-weight-300">
                  <i class="fa fa-calendar-alt mr-2"></i
                  >{{ card.talent.dob | moment('DD - MM - YYYY') }}
                </div>
                <div class="h5 mt-4">
                  <i class="fa fa-at mr-2"></i>{{ card.talent.email }}
                </div>
                <div>
                  <i class="fa fa-graduation-cap mr-2"></i
                  >{{ card.talent.university }}
                </div>
                <div class="h5 mt-4">
                  <i class="fa fa-exclamation-circle mr-2"></i>This data is
                  taken from our talents database
                </div>
              </div>
            </div>
          </div>
          <!-- Progress track -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <!-- Title -->
              <h5 class="h3 mb-0">Progress track</h5>
            </div>
            <!-- Card body -->
            <div class="card-body">
              <!-- List group -->
              <ul class="list-group list-group-flush list my--3">
                <li class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <a href="#" class="avatar rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/bootstrap.jpg"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <h5>Argon Design System</h5>
                      <div class="progress progress-xs mb-0">
                        <div
                          class="progress-bar bg-orange"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 60%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <a href="#" class="avatar rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/angular.jpg"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <h5>Angular Now UI Kit PRO</h5>
                      <div class="progress progress-xs mb-0">
                        <div
                          class="progress-bar bg-green"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 100%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <a href="#" class="avatar rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/sketch.jpg"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <h5>Black Dashboard</h5>
                      <div class="progress progress-xs mb-0">
                        <div
                          class="progress-bar bg-red"
                          role="progressbar"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 72%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <a href="#" class="avatar rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/react.jpg"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <h5>React Material Dashboard</h5>
                      <div class="progress progress-xs mb-0">
                        <div
                          class="progress-bar bg-teal"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 90%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <a href="#" class="avatar rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/vue.jpg"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <h5>Vue Paper UI Kit PRO</h5>
                      <div class="progress progress-xs mb-0">
                        <div
                          class="progress-bar bg-green"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 100%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="row">
            <div class="col-lg-6">
              <quote />
            </div>
            <div v-if="card" class="col-lg-6">
              <div class="card bg-gradient-danger border-0">
                <!-- Card body -->
                <div class="card-body align-middle" style="height: 200px;">
                  <div class="row">
                    <div class="col">
                      <h5
                        class="card-title text-uppercase text-muted mb-0 text-white"
                      >
                        Interview Schedule
                      </h5>
                      <span class="h2 font-weight-bold mb-0 text-white">{{
                        card.interview_detail.date_time
                          | moment('ddd, DD - MMM - YY / HH:MM a')
                      }}</span>
                      <p class="h4 font-weight-bold mb-0 text-white">
                        {{ card.interview_detail.location }}
                      </p>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape bg-white text-dark rounded-circle shadow"
                      >
                        <i class="far fa-id-badge"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-white mr-2"
                      ><i class="fa fa-user-tie"></i
                    ></span>
                    <span class="text-nowrap text-white">
                      PIC : {{ card.pic }}
                    </span>
                  </p>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-white mr-2"
                      ><i class="fa fa-exclamation-circle"></i
                    ></span>
                    <span class="text-nowrap text-white"
                      >Please plan to arrive 15 minutes before schedule.</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Update your latest details</h3>
                </div>
                <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username"
                          >Username</label
                        >
                        <input
                          id="input-username"
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          value="lucky.jesse"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email"
                          >Email address</label
                        >
                        <input
                          id="input-email"
                          type="email"
                          class="form-control"
                          placeholder="jesse@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name"
                          >First name</label
                        >
                        <input
                          id="input-first-name"
                          type="text"
                          class="form-control"
                          placeholder="First name"
                          value="Lucky"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name"
                          >Last name</label
                        >
                        <input
                          id="input-last-name"
                          type="text"
                          class="form-control"
                          placeholder="Last name"
                          value="Jesse"
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
A beautiful premium dashboard for Bootstrap 4.</textarea
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from '@/components/core/Attributes/Quote'
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['auth', 'candidate'],
  name: 'CandidateDashboard',
  components: {
    Quote
  },
  data() {
    return {
      card: null
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS'
    })
  },
  async created() {
    await this.GET_CANDIDATE_CARDS()
    this.card = this.CANDIDATE_CARDS.results[0]
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS'
    })
  }
}
</script>

<style></style>
