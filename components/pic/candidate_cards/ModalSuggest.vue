<template>
  <div
    id="modal-suggest"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modal-suggest-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="modal-suggest-label" class="modal-title">
            Suggest this Card a Talent
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
                <strong>Searched!</strong> Username list has been updated!
              </div>
            </div>
          </div>
          <div class="input-group mb-3 px-3">
            <input
              v-model="searchInput"
              type="text"
              class="form-control"
              placeholder="Search username ..."
              @keydown.enter="searchAccounts"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary"
                type="button"
                :disabled="disabled"
                @click="searchTalents"
              >
                Search
              </button>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <label for="username-select">Talent Name</label>

                <select
                  id="username-select"
                  v-model="selectedTalent"
                  class="form-control"
                >
                  <option
                    v-for="item in TALENTS.results"
                    :key="item.id"
                    :value="item.id"
                    >{{ item.name }}</option
                  >
                </select>
                <p>
                  <small class="text-warning"
                    >If you cannot find the username, please use the search
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PICModalSuggest',
  props: {
    selectedCard: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    return {
      searchAlert: false,
      searchInput: '',
      selectedTalent: ''
    }
  },
  computed: {
    ...mapGetters({
      TALENTS: 'talents/TALENTS'
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
      SEARCH_TALENTS: 'talents/SEARCH_TALENTS',
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD',
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS'
    }),
    clearForm() {
      Object.assign(this.$data, this.$options.data())
    },
    searchTalents() {
      this.SEARCH_TALENTS(this.searchInput)
        .then((this.searchAlert = true))
        .then(
          setTimeout(() => {
            this.searchAlert = false
          }, 1000 * 10)
        )
    },
    async patchCandidateCard() {
      const payload = {
        talent: this.selectedTalent,
        status: 2
      }
      const cardId = this.selectedCard
      try {
        await this.UPDATE_CANDIDATE_CARD({ payload, cardId })
        await this.GET_CANDIDATE_CARDS()
        document.getElementById('modal-suggest').click()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style></style>
