<template>
  <div>
    <!-- Modal -->
    <div
      v-if="card"
      id="modalDetail"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalDetailLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="modalDetailLabel" class="modal-title">
              Interview Schedule for {{ card.candidate.name }}
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
            <div class="table-responsive">
              <table class="table table-flush table-borderless">
                <tr>
                  <td>Location:</td>
                  <td>{{ card.interview_detail.location }}</td>
                </tr>
                <tr>
                  <td>Date Time:</td>
                  <td>
                    {{
                      card.interview_detail.date_time
                        | moment('Do MMM, YYYY | h:mm a')
                    }}
                  </td>
                </tr>
                <tr>
                  <td>PIC:</td>
                  <td>{{ card.pic.name }}</td>
                </tr>
                <tr>
                  <td>User:</td>
                  <td>{{ card.erf.div_user.name }}</td>
                </tr>
                <tr>
                  <td>Job Title:</td>
                  <td>{{ card.erf.job_title }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CandidateModalDetail',
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
