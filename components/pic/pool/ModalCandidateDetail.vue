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
        <div v-if="CANDIDATE_ACCOUNT.data" class="modal-body">
          <table class="table table-borderless">
            <tr>
              <th>Name :</th>
              <th>{{ CANDIDATE_ACCOUNT.data.name }}</th>
            </tr>
            <tr>
              <th>Email :</th>
              <th>{{ CANDIDATE_ACCOUNT.data.email }}</th>
            </tr>
          </table>
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
