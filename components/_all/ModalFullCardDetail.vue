<template>
  <div
    id="modal-card-full-detail"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="card-full-detailLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="card-full-detailLabel" class="modal-title">
            Card Full Detail
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
          <div id="accordionExample" class="accordion">
            <div class="card">
              <div
                id="headingOne"
                class="card-header"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h5 class="mb-0">Talent Detail from Talent Pool Database</h5>
              </div>
              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div v-if="talent" class="card-body">
                  <h3>Talent Details</h3>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td>Name:</td>
                          <td>{{ talent.name }}</td>
                        </tr>
                        <tr>
                          <td>Nik:</td>
                          <td>{{ talent.nik }}</td>
                        </tr>
                        <tr>
                          <td>Source:</td>
                          <td>{{ talent.source }}</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>{{ talent.email }}</td>
                        </tr>
                        <tr>
                          <td>Dob:</td>
                          <td>{{ talent.dob }}</td>
                        </tr>
                        <tr>
                          <td>Phone:</td>
                          <td>{{ talent.mobile_phone }}</td>
                        </tr>
                        <tr>
                          <td>Address:</td>
                          <td>{{ talent.address }}</td>
                        </tr>
                        <tr>
                          <td>Applied Position:</td>
                          <td>{{ talent.applied_position }}</td>
                        </tr>
                        <tr>
                          <td>Gender:</td>
                          <td>{{ talent.gender }}</td>
                        </tr>
                        <tr>
                          <td>Last Education:</td>
                          <td>{{ talent.last_education }}</td>
                        </tr>
                        <tr>
                          <td>Total Working Exp:</td>
                          <td>{{ talent.total_working_experience }} Years</td>
                        </tr>
                        <tr>
                          <td>University:</td>
                          <td>{{ talent.university }}</td>
                        </tr>
                        <tr>
                          <td>Created By:</td>
                          <td>{{ talent.pic.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div v-else class="card-body">
                  <p class="text-danger">No Talent Submitted</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div
                id="headingTwo"
                class="card-header"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5 class="mb-0">Candidate Account Detail</h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <div v-if="candidate && candidate.profile_pic" class="row">
                    <div class="col-12 text-center">
                      <img
                        :src="candidate.profile_pic.url"
                        class="rounded float-left"
                        alt="candidate_avatar"
                        style="max-height: 200px; max-width:200px"
                      />
                    </div>
                  </div>
                  <h3 class="mt-3">Account Details</h3>

                  <div v-if="candidate" class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td>Name:</td>
                          <td>{{ candidate.name }}</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>{{ candidate.email }}</td>
                        </tr>
                        <tr>
                          <td>Group:</td>
                          <td>{{ candidate.group }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-else>
                    <p class="text-danger">No candidate assigned</p>
                  </div>
                  <hr />
                  <h3>Candidate Newest Details</h3>
                  <div
                    v-if="candidate && candidate.user_detail"
                    class="table-responsive"
                  >
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td>Full Name:</td>
                          <td>{{ candidate.user_detail.full_name }}</td>
                        </tr>
                        <tr>
                          <td>Phone:</td>
                          <td>{{ candidate.user_detail.phone_num }}</td>
                        </tr>
                        <tr>
                          <td>Dob:</td>
                          <td>{{ candidate.user_detail.dob }}</td>
                        </tr>
                        <tr>
                          <td>University:</td>
                          <td>{{ candidate.user_detail.university }}</td>
                        </tr>
                        <tr>
                          <td>Degree:</td>
                          <td>{{ candidate.user_detail.degree }}</td>
                        </tr>
                        <tr>
                          <td>Faculty:</td>
                          <td>{{ candidate.user_detail.faculty }}</td>
                        </tr>
                        <tr>
                          <td>Address:</td>
                          <td>
                            {{ candidate.user_detail.address }},
                            {{ candidate.user_detail.city }},
                            {{ candidate.user_detail.province }},
                            {{ candidate.user_detail.postal_code }}
                          </td>
                        </tr>
                        <tr>
                          <td>About Me:</td>
                          <td>{{ candidate.user_detail.about_me }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-else>
                    <p class="text-danger">
                      Candidate has not created newest detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="user.group_id == 3" class="card">
              <div
                id="headingThree"
                class="card-header"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h5 class="mb-0">ERF</h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div v-if="erf" class="card-body">
                  <div>
                    <nuxt-link
                      :to="`/pic/erf/${erf.id}`"
                      tag="a"
                      target="_blank"
                    >
                      <button class="btn btn-warning">
                        Go to ERF Details
                      </button>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div
                id="headingFour"
                class="card-header"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <h5 class="mb-0">Miscellaneous</h5>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <p v-if="status">
                    Status : {{ status.id }} - {{ status.state }}
                  </p>
                  <p v-if="pic">Card PIC : {{ pic.name }}</p>
                  <p v-if="interviewDetail">
                    Interview Location : {{ interviewDetail.location }}
                  </p>
                  <p v-else>
                    Interview Location :
                    <span class="text-danger">No Location</span>
                  </p>
                  <p v-if="interviewDetail">
                    Interview Date Time : {{ interviewDetail.date_time }}
                  </p>
                  <p v-else>
                    Interview Date Time :
                    <span class="text-danger">No Date Time</span>
                  </p>
                  <p v-if="selectedCardDetail.last_updated_by">
                    Last Updated By :
                    {{ selectedCardDetail.last_updated_by.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ModalFullCardDetail',
  props: {
    selectedCardDetail: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    talent() {
      return this.selectedCardDetail.talent
    },
    candidate() {
      return this.selectedCardDetail.candidate
    },
    erf() {
      return this.selectedCardDetail.erf
    },
    interviewDetail() {
      return this.selectedCardDetail.interview_detail
    },
    pic() {
      return this.selectedCardDetail.pic
    },
    status() {
      return this.selectedCardDetail.status
    },
    ...mapGetters({
      user: 'loggedInUser'
    })
  }
}
</script>

<style></style>
