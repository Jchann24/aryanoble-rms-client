<template>
  <div
    id="modal-account-detail"
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
            Account Detail
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
        <div class="modal-body px-5">
          <div class="row">
            <div class="col-6 text-left">
              <h4>
                <strong>Name:</strong>
              </h4>
            </div>
            <div class="col-6">
              {{
                CANDIDATE_ACCOUNT.first_name + ' ' + CANDIDATE_ACCOUNT.last_name
              }}
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <h4>
                <strong>Username:</strong>
              </h4>
            </div>
            <div class="col-6">
              {{ CANDIDATE_ACCOUNT.username }}
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <h4>
                <strong>E-mail:</strong>
              </h4>
            </div>
            <div class="col-6">
              {{ CANDIDATE_ACCOUNT.email }}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            id="close-create"
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
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PICModalCandidateDetail',
  computed: {
    ...mapGetters({
      CANDIDATE_ACCOUNT: 'candidate-accounts/CANDIDATE_ACCOUNT'
    })
  }
}
</script>

<style></style>
