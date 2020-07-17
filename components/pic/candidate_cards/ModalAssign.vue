<template>
  <div
    v-if="CANDIDATE_ACCOUNTS.data"
    id="modal-assign"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">
            Assign Candidate Account to this Candidate Card
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
          <div class="row">
            <div class="col-12 px-3">
              <div v-if="searchAlert" class="alert alert-success" role="alert">
                <strong>Searched!</strong> Candidate Account list has been
                updated!
              </div>
            </div>
          </div>
          <div class="input-group mb-3 px-3">
            <input
              v-model="searchInput"
              type="text"
              class="form-control"
              placeholder="Search account ..."
              @keydown.enter="searchAccounts"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary"
                type="button"
                :disabled="disabled"
                @click="searchAccounts"
              >
                Search
              </button>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <label for="account-select">Accounts</label>

                <select
                  id="account-select"
                  v-model="selectedAccount"
                  class="form-control"
                >
                  <option
                    v-for="item in CANDIDATE_ACCOUNTS.data"
                    :key="item.id"
                    :value="item.id"
                    >{{ item.name }} - {{ item.email }}</option
                  >
                </select>
                <p>
                  <small class="text-warning"
                    >If you cannot find the account, please use the search
                    above.</small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer pt-0">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="clearForm"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :disabled="disableSave"
            @click="patchCandidateCard"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PICModalAssign',
  props: {
    selectedCard: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    return {
      searchInput: '',
      searchAlert: false,
      selectedAccount: ''
    }
  },
  computed: {
    ...mapGetters({
      CANDIDATE_ACCOUNTS: 'candidate-accounts/CANDIDATE_ACCOUNTS'
    }),
    disabled() {
      return this.searchInput === ''
    },
    disableSave() {
      return this.selectedAccount === ''
    }
  },
  methods: {
    ...mapActions({
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS',
      SEARCH_CANDIDATE_ACCOUNTS: 'candidate-accounts/SEARCH_CANDIDATE_ACCOUNTS',
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD'
    }),
    async searchAccounts() {
      await this.SEARCH_CANDIDATE_ACCOUNTS(this.searchInput)
      this.searchAlert = true
      setTimeout(() => {
        this.searchAlert = false
      }, 1000 * 10)
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    async patchCandidateCard() {
      const payload = {
        candidate_id: this.selectedAccount,
        status_id: 4
      }
      const cardId = this.selectedCard

      try {
        await this.UPDATE_CANDIDATE_CARD({ payload, cardId })
        await this.GET_CANDIDATE_CARDS()
        document.getElementById('modal-assign').click()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style></style>
