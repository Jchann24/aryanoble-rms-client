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
              <h5 class="h3 mb-0">Last Status</h5>
            </div>
            <!-- Card body -->
            <div class="card-body">
              <!-- List group -->
              <ul class="list-group list-group-flush list my--3">
                <li class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <div class="avatar rounded-circle bg-transparent">
                        <img
                          alt="Image placeholder"
                          src="/img/candidate/edit-list.png"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <h5>
                        State {{ card.status.id }} - {{ card.status.state }}
                      </h5>
                      <div class="progress progress-xs mb-0">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          aria-valuenow="60"
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
                      PIC : {{ card.pic.name }}
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
          <edit-form v-if="!loggedInUser.user_detail" />
          <detail-card v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from '@/components/core/Attributes/Quote'
import EditForm from '@/components/candidate/index/EditForm'
import DetailCard from '@/components/candidate/index/DetailCard'
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['auth', 'candidate'],
  name: 'CandidateDashboard',
  components: {
    Quote,
    EditForm,
    DetailCard
  },
  data() {
    return {
      card: null
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_CARDS: 'candidate-cards/CANDIDATE_CARDS',
      loggedInUser: 'loggedInUser'
    })
  },
  async created() {
    await this.GET_CANDIDATE_CARDS()
    this.card = this.CANDIDATE_CARDS.data[0]
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS'
    })
  }
}
</script>

<style></style>
